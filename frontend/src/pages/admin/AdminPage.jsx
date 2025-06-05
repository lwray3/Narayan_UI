import React, { useState } from 'react';
import './AdminPage.css';

const AdminPage = () => {
  const [users] = useState([
    { username: 'danielthomas', role: 'user', group: 'Group A' },
    { username: 'johndoe', role: 'user', group: 'Group B' },
    { username: 'bobwilson', role: 'group_admin', group: 'Group A' },
    { username: 'admin', role: 'system_admin', group: '' }
  ]);
  
  const [activeTab, setActiveTab] = useState('users');

  const handleAddUser = () => {
    console.log('Add user clicked');
  };

  const handleEditUser = (username) => {
    console.log('Edit user:', username);
  };

  const handleDeleteUser = (username) => {
    console.log('Delete user:', username);
  };

  const handleSignOut = () => {
    console.log('Sign out clicked');
  };

  return (
    <div className="admin-page">
      {/* Left Navigation */}
      <nav className="sidebar">
        <div className="user-profile">
          <div className="user-avatar">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Admin" />
          </div>
          <span className="user-name">Admin</span>
        </div>

        <div className="nav-menu">
          <button className="nav-item">
            <i className="ci-Desktop"></i>
            <span>Dashboard</span>
          </button>
          <button className="nav-item active">
            <i className="ci-User_02"></i>
            <span>IDSL Agent</span>
          </button>
          <button className="nav-item">
            <i className="ci-Users_Group"></i>
            <span>MOLx</span>
          </button>
        </div>

        <button className="sign-out-btn" onClick={handleSignOut}>
          SIGN OUT
        </button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="logo-section">
            <div className="logo">
              <img src="/logo.png" alt="Lab Logo" className="logo-img" />
            </div>
            <h1 className="main-title">Intelligent Data Science Lab</h1>
          </div>
          <div className="search-section">
            <button className="search-btn">
              <i className="ci-Search_Magnifying_Glass"></i>
              SEARCH
            </button>
          </div>
        </header>

        {/* Users Panel */}
        <div className="users-panel">
          <div className="panel-header">

            <div className="toggle-switch">
              <button
                className={`toggle-btn ${activeTab === 'users' ? 'active' : ''}`}
                onClick={() => setActiveTab('users')}
              >
                <i className="ci-User_02"></i> USER
              </button>
              <button
                className={`toggle-btn ${activeTab === 'groups' ? 'active' : ''}`}
                onClick={() => setActiveTab('groups')}
              >
                <i className="ci-Users_Group"></i> GROUPS
              </button>
            </div>
            <button className="add-user-btn" onClick={handleAddUser}>
              <i className="ci-User_Add"></i>
              ADD USER
            </button>
          </div>

          <div className="users-table">
            <div className="table-header">
              <div className="table-heading">Username</div>
              <div className="table-heading">Role</div>
              <div className="table-heading">Group</div>
              <div className="table-heading">Actions</div>
            </div>
            
            <div className="table-body">
              {users.map((user, index) => (
                <div key={index} className="table-row">
                  <div className="table-cell username">{user.username}</div>
                  <div className="table-cell role">{user.role}</div>
                  <div className="table-cell group">{user.group}</div>
                  <div className="table-cell actions">
                    <button 
                      className="action-btn edit-btn"
                      onClick={() => handleEditUser(user.username)}
                      title="Edit"
                    >
                      <i className="ci-Edit_Pencil_Line_01" style = {{fontSize: '19px'}}></i>
                    </button>
                    <button 
                      className="action-btn delete-btn"
                      onClick={() => handleDeleteUser(user.username)}
                      title="Delete"
                    >
                      <i className="ci-Close_Circle" style = {{fontSize: '19px'}}></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;