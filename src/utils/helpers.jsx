import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Helper function to render star rating
export const renderStarRating = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }

  return stars;
};

// Helper function to format currency in Arabic locale
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("ar-SA", {
    style: "currency",
    currency: "SAR",
  }).format(amount);
};
export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
export const isWithinLastWeek = (dateString) => {
  const date = new Date(dateString);
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  return date >= weekAgo;
};

export const isWithinLastMonth = (dateString) => {
  const date = new Date(dateString);
  const monthAgo = new Date();
  monthAgo.setMonth(monthAgo.getMonth() - 1);
  return date >= monthAgo;
};
