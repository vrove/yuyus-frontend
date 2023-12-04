import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Profilepage.css';

const ProfilePage = ({ cartItems }) => {
  const user = {
    name: 'John Doe',
    username: 'john_doe123',
    email: 'john.doe@example.com',
    avatar: 'https://dummyimage.com/150x150/000/fff&text=JD',
    dateOfBirth: 'January 1, 1990',
    gender: 'Male',
    phoneNumber: '+1234567890',
    address: '456 Secondary St, Apt 7C, Cityville, State 67890',
  };

  const orders = [
    { id: 1, orderNumber: '12345', status: 'Delivered' },
    { id: 2, orderNumber: '67890', status: 'Processing' },
    // Add more orders as needed
  ];

  const shippingAddress = {
    street: '123 Main St, Apt 4B',
    city: 'Cityville',
    state: 'State 12345',
    country: 'Country',
  };

  return (
    <>
      <Header cartItems={cartItems} />

      <div className="profile-container">
        <div className="profile-left">
          <img src={user.avatar} alt="User Avatar" className="avatar" />
          <div className="user-details">
            <h2>{user.name}</h2>
            <p>@{user.username}</p>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="profile-right">
          <section className="profile-info">
            <h2>User Information</h2>
            <p>Date of Birth: {user.dateOfBirth}</p>
            <p>Gender: {user.gender}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>Address: {user.address}</p>
          </section>
          <section className="profile-orders">
            <h2>Your Orders</h2>
            <ul>
              {orders.map((order) => (
                <li key={order.id}>
                  <span>Order #{order.orderNumber}</span>
                  <span>Status: {order.status}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="profile-address">
            <h2>Shipping Address</h2>
            <address>
              {shippingAddress.street}<br />
              {shippingAddress.city}, {shippingAddress.state}<br />
              {shippingAddress.country}
            </address>
            <button>Edit Address</button>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProfilePage;