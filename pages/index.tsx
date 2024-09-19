import Layout from '../components/layout/Layout';
import HeroSection from '../components/HeroSection';
import CourseList from '../components/CourseList';
import Testimonials from '../components/Testimonials';
import Chatbot from '../components/Chatbot';
import PersonalizedRecommendations from '../components/PersonalizedRecommendations';
import React from 'react';

const HomePage = () => (
    <Layout>
      <HeroSection />
      <CourseList />
      <PersonalizedRecommendations />
      <Testimonials />
      <Chatbot />
    </Layout>
  );
  
  export default HomePage;
