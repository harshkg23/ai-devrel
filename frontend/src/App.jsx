import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Landing from './pages/Landing/Landing'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout/Layout';
import Signup from './pages/Signup';
import UserLogin from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';
import TechnicalNews from './pages/technical-news/TechnicalNews';
import NewsDetail from './pages/NewsDetails/NewsDetails';
import HotTopics from './pages/hot-topic/HotTopics';
import TopicDetail from './pages/hot-topic/Topicdetail';
import SoftwareTrends from './pages/softwareTrends/SoftwareTrends';


function App() {

  const url = 'http://localhost:8000'

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} /> {/* Renders at "/" */}
        <Route path="login" element={<UserLogin url={url} />} />
        <Route path="signup" element={<Signup url={url} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<TechnicalNews />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/hot-topics" element={<HotTopics />} />
        <Route path="/topics/:id" element={<TopicDetail />} />
        <Route path="/software-trends" element={<SoftwareTrends />} />
      </Route>
    </Routes>
  );
}

export default App
