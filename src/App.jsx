import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import CreateBuild from './CreateBuild';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import { useAuth } from './contexts/AuthContext';
import { collection, query, orderBy, getDocs, getDoc, doc, updateDoc, arrayUnion, arrayRemove, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
import dooleyImg from './assets/characters/dooley.jpg';
import pygmalienImg from './assets/characters/pygmalien.jpg';
import vanessaImg from './assets/characters/vanessa.jpg';
import cards from './utils/cardData';
import BuildDetails from './BuildDetails';
import EditBuild from './EditBuild';
import CardWithOverlay from './components/CardWithOverlay';

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const [filterText, setFilterText] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  const [heroFilter, setHeroFilter] = useState('');
  const [builds, setBuilds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState(Date.now());
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [expandedBuildId, setExpandedBuildId] = useState(null);
  const [userUpvotes, setUserUpvotes] = useState([]);
  const [upvoteLoading, setUpvoteLoading] = useState(new Set());

  // Function to refresh builds
  const refreshBuilds = () => {
    setLastUpdateTimestamp(Date.now());
  };

  useEffect(() => {
    let unsubscribe = () => {};

    async function fetchBuilds() {
      setLoading(true);
      setError(null);
      try {
        console.log('Fetching builds...');
        const buildsRef = collection(db, 'builds');
        const q = query(buildsRef, orderBy('updatedAt', 'desc'));
        const querySnapshot = await getDocs(q);
        console.log('Query snapshot:', querySnapshot.size, 'documents');
        
        const buildsData = await Promise.all(querySnapshot.docs.map(async docSnapshot => {
          const data = docSnapshot.data();
          console.log('Build data:', data);
          
          if (!data) {
            console.log('No data for build:', docSnapshot.id);
            return null;
          }

          return {
            id: docSnapshot.id,
            ...data,
            username: data.username || 'Unknown User',
            upvotes: data.upvotes || [],
            createdAt: data.createdAt?.toDate() || new Date(),
            updatedAt: data.updatedAt?.toDate() || new Date()
          };
        }));
        
        const validBuilds = buildsData.filter(build => build !== null);
        console.log('Processed builds:', validBuilds);
        setBuilds(validBuilds);

        // Set user's upvotes only if user is logged in
        if (user) {
          const userUpvotedBuilds = validBuilds
            .filter(build => build.upvotes?.includes(user.uid))
            .map(build => build.id);
          setUserUpvotes(userUpvotedBuilds);
        } else {
          setUserUpvotes([]); // Reset upvotes for non-logged in users
        }
      } catch (error) {
        console.error('Error fetching builds:', error);
        setError('Failed to load builds. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchBuilds();
    return () => unsubscribe();
  }, [user, lastUpdateTimestamp]);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleHeroFilterChange = (event) => {
    setHeroFilter(event.target.value);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const getHeroImage = (hero) => {
    const baseHero = hero.split('/')[0];
    switch (baseHero) {
      case 'dooley':
        return dooleyImg;
      case 'pygmalien':
        return pygmalienImg;
      case 'vanessa':
        return vanessaImg;
      default:
        return dooleyImg; // fallback image
    }
  };

  const handleUpvote = async (buildId) => {
    if (!user) {
      navigate('/login');
      return;
    }

    // Prevent multiple clicks while processing
    if (upvoteLoading.has(buildId)) {
      return;
    }

    try {
      setUpvoteLoading(prev => new Set([...prev, buildId]));

      const buildRef = doc(db, 'builds', buildId);
      const buildDoc = await getDoc(buildRef);
      const currentUpvotes = buildDoc.data()?.upvotes || [];
      const hasUpvoted = currentUpvotes.includes(user.uid);

      if (hasUpvoted) {
        await updateDoc(buildRef, {
          upvotes: arrayRemove(user.uid)
        });
        setUserUpvotes(prev => prev.filter(id => id !== buildId));
      } else {
        await updateDoc(buildRef, {
          upvotes: arrayUnion(user.uid)
        });
        setUserUpvotes(prev => [...prev, buildId]);
      }

      // Update local state
      setBuilds(prev => prev.map(build => {
        if (build.id === buildId) {
          const newUpvotes = hasUpvoted
            ? build.upvotes.filter(id => id !== user.uid)
            : [...build.upvotes, user.uid];
          return { ...build, upvotes: newUpvotes };
        }
        return build;
      }));
    } catch (error) {
      console.error('Error updating upvote:', error);
    } finally {
      // Remove from loading state after completion
      setUpvoteLoading(prev => {
        const next = new Set(prev);
        next.delete(buildId);
        return next;
      });
    }
  };

  const handleDelete = async (buildId) => {
    if (!user) {
      navigate('/login');
      return;
    }

    // Show confirmation dialog
    if (!window.confirm('Are you sure you want to delete this build? This action cannot be undone.')) {
      return;
    }

    try {
      const buildRef = doc(db, 'builds', buildId);
      const buildDoc = await getDoc(buildRef);
      const buildData = buildDoc.data();

      // Check if user is the creator
      if (buildData.userId !== user.uid) {
        alert('You can only delete your own builds.');
        return;
      }

      // Delete the build
      await deleteDoc(buildRef);

      // Update local state
      setBuilds(prev => prev.filter(build => build.id !== buildId));

      // Show success notification
      const notification = document.createElement('div');
      notification.textContent = 'Build deleted successfully!';
      notification.style.position = 'fixed';
      notification.style.top = '20px';
      notification.style.left = '50%';
      notification.style.transform = 'translateX(-50%)';
      notification.style.backgroundColor = '#4a90e2';
      notification.style.color = 'white';
      notification.style.padding = '8px 16px';
      notification.style.borderRadius = '4px';
      notification.style.zIndex = '1000';
      notification.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
      document.body.appendChild(notification);
      
      // Remove notification after 2 seconds
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 2000);
    } catch (error) {
      console.error('Error deleting build:', error);
      alert('Failed to delete build. Please try again later.');
    }
  };

  const filteredBuilds = builds
    .filter(build => {
      const matchesText = build.title.toLowerCase().includes(filterText.toLowerCase());
      const matchesHero = !heroFilter || 
        (heroFilter === 'dooley' ? build.hero === 'dooley' || build.hero.startsWith('dooley/') : build.hero === heroFilter);
      return matchesText && matchesHero;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'newest':
          return b.createdAt - a.createdAt;
        case 'mostPopular':
          return (b.upvotes?.length || 0) - (a.upvotes?.length || 0);
        case 'recentlyUpdated':
          return b.updatedAt - a.updatedAt;
        default:
          return 0;
      }
    });

  return (
    <div className="dashboard" style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <Routes>
        <Route path="/" element={
          <>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h1>The Bazaar Builds</h1>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                {user ? (
                  <>
                    <span style={{ color: 'white' }}>{user.username}</span>
                    <Link to="/create" className="create-button">+ Create Build</Link>
                    <button
                      onClick={handleLogout}
                      style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #4a90e2',
                        color: '#4a90e2',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Link to="/login" style={{
                      color: '#4a90e2',
                      textDecoration: 'none',
                      padding: '8px 16px',
                      border: '1px solid #4a90e2',
                      borderRadius: '4px',
                    }}>
                      Sign In
                    </Link>
                    <Link 
                      to="/create" 
                      className="create-button" 
                      onClick={(e) => {
                        if (!user) {
                          e.preventDefault();
                          navigate('/login');
                        }
                      }}
                      style={{
                        opacity: '0.6',
                        cursor: 'not-allowed',
                        backgroundColor: '#1976d2',
                        color: 'white',
                        textDecoration: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      + Create Build
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="filter-bar">
              <input
                type="text"
                placeholder="Search builds..."
                value={filterText}
                onChange={handleFilterChange}
              />
              <select value={sortOption} onChange={handleSortChange}>
                <option value="newest">Newest</option>
                <option value="mostPopular">Most Popular</option>
                <option value="recentlyUpdated">Recently Updated</option>
              </select>
              <select value={heroFilter} onChange={handleHeroFilterChange}>
                <option value="">All Heroes</option>
                <optgroup label="Dooley">
                  <option value="dooley">Dooley</option>
                  <option value="dooley/armored-core">Armored Core</option>
                  <option value="dooley/combat-core">Combat Core</option>
                  <option value="dooley/companion-core">Companion Core</option>
                  <option value="dooley/critical-core">Critical Core</option>
                  <option value="dooley/ignition-core">Ignition Core</option>
                  <option value="dooley/the-core">The Core</option>
                  <option value="dooley/weaponized-core">Weaponized Core</option>
                </optgroup>
                <option value="pygmalien">Pygmalien</option>
                <option value="vanessa">Vanessa</option>
              </select>
            </div>
            <div style={{ 
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {loading ? (
                <div style={{
                  backgroundColor: '#2b2440',
                  padding: '16px',
                  borderRadius: '8px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  Loading builds...
                </div>
              ) : error ? (
                <div style={{
                  backgroundColor: '#2b2440',
                  padding: '16px',
                  borderRadius: '8px',
                  color: '#ff6b6b',
                  textAlign: 'center'
                }}>
                  {error}
                </div>
              ) : builds.length === 0 ? (
                <div style={{
                  backgroundColor: '#2b2440',
                  padding: '16px',
                  borderRadius: '8px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  No builds found. {user ? 'Create your first build!' : 'Sign in to create a build!'}
                </div>
              ) : (
                filteredBuilds.map(build => (
                  <div 
                    key={build.id} 
                    style={{ 
                      backgroundColor: '#2b2440',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      userSelect: 'none'
                    }}
                  >
                    {/* Build Card */}
                    <div
                      style={{
                        position: 'relative',
                        height: '200px',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {/* Character Image */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '400px',
                        bottom: 0,
                        backgroundImage: `url(${getHeroImage(build.hero)})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 1
                      }} />
                      
                      {/* Content Overlay */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(90deg, rgba(43,36,64,0) 0%, rgba(43,36,64,1) 400px)',
                        padding: '16px',
                        display: 'flex',
                        zIndex: 2
                      }}>
                        {/* Left side - Title and Info */}
                        <div 
                          onClick={() => navigate(`/build/${build.id}`)}
                          style={{
                            flex: '0 0 250px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            cursor: 'pointer'
                          }}
                        >
                          <div>
                            <h3 style={{
                              margin: 0,
                              fontSize: '1.5rem',
                              color: 'white',
                              marginBottom: '8px'
                            }}>{build.title || 'Untitled Build'}</h3>
                            <p style={{
                              margin: 0,
                              color: 'rgba(255,255,255,0.8)',
                              fontSize: '0.9rem'
                            }}>By {build.username}</p>
                          </div>
                          
                          <div>
                            <p style={{
                              margin: '0 0 8px 0',
                              color: 'rgba(255,255,255,0.7)',
                              fontSize: '0.8rem'
                            }}>
                              {build.updatedAt && build.updatedAt > build.createdAt ? 
                                `Updated on ${build.updatedAt.toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}` :
                                `Created on ${build.createdAt.toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}`
                              }
                            </p>
                            <div style={{
                              display: 'flex',
                              gap: '8px'
                            }}>
                              <div
                                onClick={(e) => {
                                  // Always prevent propagation, even when loading
                                  e.preventDefault();
                                  e.stopPropagation();
                                  if (!upvoteLoading.has(build.id)) {
                                    handleUpvote(build.id);
                                  }
                                }}
                                style={{
                                  padding: '4px 8px',
                                  backgroundColor: userUpvotes.includes(build.id) ? '#4a90e2' : 'rgba(0,0,0,0.5)',
                                  borderRadius: '4px',
                                  color: 'white',
                                  fontSize: '0.8rem',
                                  cursor: upvoteLoading.has(build.id) ? 'wait' : (user ? 'pointer' : 'not-allowed'),
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  opacity: user ? (upvoteLoading.has(build.id) ? 0.7 : 1) : 0.6,
                                  transition: 'all 0.2s ease'
                                }}
                              >
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill={userUpvotes.includes(build.id) ? 'white' : 'none'}
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 2l9 9h-6v11H9V11H3z"/>
                                </svg>
                                <span>{build.upvotes?.length || 0}</span>
                              </div>
                              <span style={{
                                padding: '4px 8px',
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                borderRadius: '4px',
                                color: 'white',
                                fontSize: '0.8rem'
                              }}>
                                {build.hero.split('/')[0].charAt(0).toUpperCase() + build.hero.split('/')[0].slice(1)}
                              </span>
                              {build.hero.includes('/') && (
                                <span style={{
                                  padding: '4px 8px',
                                  backgroundColor: 'rgba(74, 144, 226, 0.3)',
                                  borderRadius: '4px',
                                  color: 'white',
                                  fontSize: '0.8rem'
                                }}>
                                  {build.hero.split('/')[1].split('-').map(word => 
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                  ).join(' ')}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Right side - Board Preview */}
                        <div style={{
                          flex: 1,
                          marginLeft: '150px',
                          marginRight: '80px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          paddingRight: '16px'
                        }}>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(10, 80px)',
                            gap: '8px',
                            padding: '16px',
                            backgroundColor: '#2b2440',
                            borderRadius: '8px',
                            width: 'fit-content',
                            height: '172px',
                            overflow: 'hidden'
                          }}>
                            {build.boardSlots?.map((slot, index) => {
                              if (!slot || slot.isStart) {
                                const card = slot ? cards.find(c => c.name === slot.type) : null;
                                const slotWidth = slot ? 
                                  (slot.size === 'small' ? '84px' : 
                                   slot.size === 'medium' ? '172px' : 
                                   '252px') : '80px';
                                
                                return (
                                  <div
                                    key={index}
                                    style={{
                                      backgroundColor: slot ? 'transparent' : '#4a4a5a',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      height: '172px',
                                      width: slotWidth,
                                      position: 'relative',
                                      gridColumn: slot ? `span ${slot.size === 'small' ? 1 : slot.size === 'medium' ? 2 : 3}` : 'span 1',
                                      border: slot ? '2px solid #4a90e2' : 'none',
                                      borderRadius: '8px',
                                      overflow: 'hidden',
                                      boxSizing: 'border-box'
                                    }}
                                  >
                                    {card && (
                                      <CardWithOverlay card={card} slot={slot} />
                                    )}
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                          
                          {/* Action Buttons */}
                          <div style={{ 
                            position: 'absolute', 
                            right: '20px', 
                            top: '16px', 
                            bottom: '16px',
                            display: 'flex', 
                            flexDirection: 'column',
                            gap: '12px', 
                            zIndex: 3,
                            justifyContent: user && build.userId === user.uid ? 'flex-start' : 'flex-end'
                          }}>
                            {user && build.userId === user.uid ? (
                              <>
                                <div 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/edit/${build.id}`);
                                  }}
                                  style={{
                                    width: '32px',
                                    height: '32px',
                                    backgroundColor: '#4a90e2',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#357abd';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#4a90e2';
                                  }}
                                >
                                  <svg 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                  </svg>
                                </div>
                                <div 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(build.id);
                                  }}
                                  style={{
                                    width: '32px',
                                    height: '32px',
                                    backgroundColor: '#dc3545',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#c82333';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#dc3545';
                                  }}
                                >
                                  <svg 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M3 6h18"></path>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                  </svg>
                                </div>
                              </>
                            ) : null}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                              <div 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const buildUrl = `${window.location.origin}/build/${build.id}`;
                                  navigator.clipboard.writeText(buildUrl).then(() => {
                                    // Show notification
                                    const notification = document.createElement('div');
                                    notification.textContent = 'Link copied to clipboard!';
                                    notification.style.position = 'fixed';
                                    notification.style.top = '20px';
                                    notification.style.left = '50%';
                                    notification.style.transform = 'translateX(-50%)';
                                    notification.style.backgroundColor = '#4a90e2';
                                    notification.style.color = 'white';
                                    notification.style.padding = '8px 16px';
                                    notification.style.borderRadius = '4px';
                                    notification.style.zIndex = '1000';
                                    notification.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
                                    document.body.appendChild(notification);
                                    
                                    // Remove notification after 2 seconds
                                    setTimeout(() => {
                                      document.body.removeChild(notification);
                                    }, 2000);
                                  });
                                }}
                                style={{
                                  width: '32px',
                                  height: '32px',
                                  backgroundColor: '#4a90e2',
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease',
                                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#357abd';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = '#4a90e2';
                                }}
                              >
                                <svg 
                                  width="16" 
                                  height="16" 
                                  viewBox="0 0 24 24" 
                                  fill="none" 
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                              </div>
                              <div 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedBuildId(expandedBuildId === build.id ? null : build.id);
                                }}
                                style={{
                                  width: '32px',
                                  height: '32px',
                                  backgroundColor: '#4a90e2',
                                  borderRadius: '50%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease',
                                  transform: expandedBuildId === build.id ? 'rotate(180deg)' : 'rotate(0deg)',
                                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#357abd';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = '#4a90e2';
                                }}
                              >
                                <svg 
                                  width="16" 
                                  height="16" 
                                  viewBox="0 0 24 24" 
                                  fill="none" 
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M6 9l6 6 6-6"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Overview Section - Integrated with the card */}
                    {expandedBuildId === build.id && (
                      <div style={{
                        padding: '16px',
                        borderTop: '1px solid rgba(74, 144, 226, 0.3)',
                        transition: 'all 0.3s ease',
                      }}>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px'
                        }}>
                          <div>
                            <h4 style={{
                              margin: '0 0 8px 0',
                              color: '#4a90e2',
                              fontSize: '1rem'
                            }}>Overview</h4>
                            <p style={{
                              margin: 0,
                              color: 'white',
                              fontSize: '0.9rem',
                              lineHeight: '1.4'
                            }}>
                              {build.overview || 'No overview available.'}
                            </p>
                          </div>
                          <div>
                            <h4 style={{
                              margin: '0 0 8px 0',
                              color: '#4a90e2',
                              fontSize: '1rem'
                            }}>Board Description</h4>
                            <div 
                              style={{
                                margin: 0,
                                color: 'white',
                                fontSize: '0.9rem',
                                lineHeight: '1.4'
                              }}
                              dangerouslySetInnerHTML={{ __html: build.description || 'No board description available.' }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreateBuild onBuildSaved={refreshBuilds} />
            </PrivateRoute>
          }
        />
        <Route path="/build/:buildId" element={<BuildDetails />} />
        <Route
          path="/edit/:buildId"
          element={
            <PrivateRoute>
              <EditBuild onBuildUpdated={refreshBuilds} />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
