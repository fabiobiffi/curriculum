<template>
    <div class="countdown-page">
      <div class="countdown-container">
        <h1 class="countdown-title">Website under construction</h1>
        <div class="countdown-timer">
          <div class="countdown-item">
            <span class="countdown-value">{{ days }}</span>
            <span class="countdown-label">Days</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-value">{{ hours }}</span>
            <span class="countdown-label">Hours</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-value">{{ minutes }}</span>
            <span class="countdown-label">Minutes</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-value">{{ seconds }}</span>
            <span class="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        countdownDate: new Date('September 1, 2023 00:00:00').getTime(),
        countdownInterval: null,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    },
    mounted() {
      this.countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = this.countdownDate - now;
  
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        if (distance < 0) {
          clearInterval(this.countdownInterval);
          // Aggiungi qui eventuali azioni quando il countdown è terminato
        }
      }, 1000);
    },
    beforeDestroy() {
      clearInterval(this.countdownInterval);
    },
  };
  </script>
  
  <style>
  .countdown-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to bottom right, #000080, #008000);
  }
  
  .countdown-container {
    text-align: center;
    color: #fff;
  }
  
  .countdown-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .countdown-timer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .countdown-item {
    margin: 0 10px;
  }
  
  .countdown-value {
    font-size: 48px;
  }
  
  .countdown-label {
    font-size: 14px;
  }
  </style>
  