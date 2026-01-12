<template>
  <footer class="footer">
    <div class="footer-content">
    </div>

    <!-- 著作権情報 -->
    <div class="footer-bottom">
      <p>&copy; 2025 Hopelight.inc All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 20px;
  color: #343a40;

  @media screen and (max-width: 500px) {
    width: 90%;
    padding: 20px 0;
    margin: 0 auto;
  }


  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    gap: 2rem;

    .about {
      flex: 1;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.5;
      }
    }

    .social-media {
      flex: 1;
      text-align: center;

      h4 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      .icons {
        display: flex;
        justify-content: center;
        gap: 1rem;

        a {
          font-size: 1.5rem;
          text-decoration: none;
          transition: transform 0.3s ease;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    font-size: 1.0rem;
  }
}
</style>
