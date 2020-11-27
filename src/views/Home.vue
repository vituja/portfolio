<template>
  <div class="navbar">
    <Hamburger @toggle="updateNav" :navIsOpen="navIsOpen" />
    <transition name="pop">
      <nav v-show="navIsOpen" class="navigation">
        <a href="#home" class="navigation__link" @click="closeNav">Domů</a>
        <a href="#service" class="navigation__link" @click="closeNav"
          >Jak pracuji</a
        >
        <a href="#work" class="navigation__link" @click="closeNav">Co dělám</a>
        <a href="#about" class="navigation__link" @click="closeNav">O mně</a>
        <a href="#contact" class="navigation__link" @click="closeNav"
          >Kontakt</a
        >
      </nav>
    </transition>
  </div>
  <main>
    <section id="home" class="hero">
      <header class="hero__head">
        <div class="language"></div>
        <div class="contact">
          <a href="tel:721892820">
            <div class="contact__item">
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <g class="fa-group">
                  <path
                    class="fa-secondary"
                    fill="currentColor"
                    d="M0 384v80a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48v-80zm160 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                    opacity="0.4"
                  ></path>
                  <path
                    class="fa-primary"
                    fill="currentColor"
                    d="M0 384V48A48 48 0 0 1 48 0h224a48 48 0 0 1 48 48v336z"
                  ></path>
                </g>
              </svg>
              <div class="underline">+420 721 892 820</div>
            </div>
          </a>
          <a href="mailto:jan@janvitu.dev">
            <div class="contact__item">
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g class="fa-group">
                  <path
                    class="fa-secondary"
                    fill="currentColor"
                    d="M256.47 352h-.94c-30.1 0-60.41-23.42-82.54-40.52C169.39 308.7 24.77 202.7 0 183.33V400a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V183.36c-24.46 19.17-169.4 125.34-173 128.12-22.12 17.1-52.43 40.52-82.53 40.52zM464 64H48a48 48 0 0 0-48 48v19a24.08 24.08 0 0 0 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4 23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7A23.93 23.93 0 0 0 512 131v-19a48 48 0 0 0-48-48z"
                    opacity="0.4"
                  ></path>
                  <path
                    class="fa-primary"
                    fill="currentColor"
                    d="M512 131v52.36c-24.46 19.17-169.4 125.34-173 128.12-22.12 17.1-52.43 40.52-82.53 40.52h-.94c-30.1 0-60.41-23.42-82.54-40.52C169.39 308.7 24.77 202.7 0 183.33V131a24.08 24.08 0 0 0 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7 16.69 12.12 49.75 41.4 72.93 41.4h.94c23.18 0 56.24-29.28 72.93-41.4 132.7-96.3 142.8-104.7 173.4-128.7A23.93 23.93 0 0 0 512 131z"
                  ></path>
                </g>
              </svg>
              <div class="underline">jan@janvitu.dev</div>
            </div>
          </a>
        </div>
        <div class="social">
          <a
            class="social__item"
            title="GitHub"
            href="https://githuH.com/vituja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </a>
          <a
            class="social__item"
            title="CodePen"
            href="https://codepen.io/vituja1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"
              ></path>
            </svg>
          </a>
        </div>
      </header>
      <div class="hero__main">
        <h1>
          <svg
            class="logo logo--big"
            width="100"
            height="100"
            viewBox="0 0 100 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Jan Vítů</title>
            <g>
              <path
                d="M57.3919 6.53687H61.7973L54.1944 23.2348H50.7364L43.1335 6.53687H47.6574L52.5128 17.811L57.3919 6.53687Z"
              />
              <path
                d="M62.793 23.2353V6.53737H67.151V23.2353H62.793ZM66.2273 5.11626H63.6693L66.1325 1.39771H69.8984L66.2273 5.11626Z"
              />
              <path
                d="M73.9489 23.2348V10.0659H68.9514V6.53687H83.3519V10.0659H78.3543V23.2348H73.9489Z"
              />
              <path
                d="M92.4483 23.4482C90.0324 23.4482 88.2087 22.8324 86.9534 21.6008C85.6981 20.3692 85.0586 18.5691 85.0586 16.2006V6.53708H89.3219V16.3664C89.3219 17.5743 89.5824 18.498 90.1271 19.1375C90.6719 19.777 91.4298 20.1086 92.4483 20.1086C93.4667 20.1086 94.2246 19.777 94.7694 19.1375C95.3141 18.498 95.5747 17.5743 95.5747 16.3664V6.53708H99.8617V16.2006C99.8617 18.5454 99.2222 20.3455 97.9669 21.5771C96.6879 22.8324 94.8404 23.4482 92.4483 23.4482ZM92.4483 5.2344C91.714 5.2344 91.0745 4.97387 90.5535 4.47648C90.0324 3.97909 89.7719 3.3396 89.7719 2.60536C89.7719 1.87112 90.0324 1.25531 90.5535 0.757923C91.0745 0.260536 91.714 0 92.4483 0C93.1825 0 93.822 0.260536 94.3431 0.757923C94.8641 1.25531 95.1247 1.87112 95.1247 2.60536C95.1247 3.3396 94.8641 3.97909 94.3431 4.47648C93.822 4.97387 93.1825 5.2344 92.4483 5.2344ZM92.4483 3.6475C92.7325 3.6475 92.9693 3.55276 93.1588 3.3396C93.3246 3.15012 93.4193 2.91326 93.4193 2.60536C93.4193 2.32114 93.3246 2.08429 93.1588 1.87112C92.9693 1.68164 92.7325 1.5869 92.4483 1.5869C92.164 1.5869 91.9272 1.68164 91.7614 1.87112C91.5719 2.08429 91.4772 2.32114 91.4772 2.60536C91.4772 2.91326 91.5719 3.15012 91.7614 3.3396C91.9272 3.55276 92.164 3.6475 92.4483 3.6475Z"
              />
              <path
                d="M0 16.7224L1.94217 16.6039C2.53429 16.5802 2.93693 16.4381 3.19747 16.1776C3.458 15.9171 3.57643 15.5144 3.57643 14.9697V3.24554H7.95814V14.8986C7.95814 16.5329 7.53181 17.7645 6.65547 18.6172C5.77913 19.4935 4.47646 19.9672 2.70008 20.0856L0.260534 20.2041L0 16.7224Z"
              />
              <path
                d="M23.7096 19.9435L22.2174 16.4855H14.8277L13.3356 19.9435H8.95386L16.7462 3.24554H20.2042L28.0202 19.9435H23.7096ZM16.2251 13.217H20.82L18.5226 7.86413L16.2251 13.217Z"
              />
              <path
                d="M40.6928 19.9435H43.9139V11.5945V7.42004L41.877 3.24554H39.8401V12.7906L32.1899 3.24554H29.0161V19.9435H33.0662V10.3984L40.6928 19.9435Z"
              />
            </g>
          </svg>
        </h1>
        <div class="job">
          <h2>
            Jsem <span class="text--highlighted">UI</span> &
            <span class="text--highlighted">UX</span> designér a
            <span class="text--highlighted">developer</span> specializující se
            na webové technologie. Mým cílem je vytvářet rychlé a responzivní
            weby, které uživatele nenutí přemýšlet.
          </h2>
        </div>
        <div class="job__cta">
          <a
            href="#contact"
            class="mdn-btn mdn-btn--contained"
            @mousedown="rippleEffect"
          >
            Kontakt
          </a>
          <a
            href="#work"
            class="mdn-btn mdn-btn--outlined"
            @mousedown="rippleEffect"
          >
            Co dělám
          </a>
        </div>
      </div>
    </section>
    <section id="service" class="service">
      <h2>Jak pracuji</h2>
      <header class="service__header">
        <div class="service__group">
          <service-card>
            <template v-slot:icon>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="tachometer-alt-fastest"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M120 320c0 13.26-10.74 24-24 24s-24-10.74-24-24 10.74-24 24-24 24 10.74 24 24zm168-168c13.26 0 24-10.74 24-24s-10.74-24-24-24-24 10.74-24 24 10.74 24 24 24zm136 56c13.26 0 24-10.74 24-24s-10.74-24-24-24-24 10.74-24 24 10.74 24 24 24zm71.78 109.38c1.47 8.72-4.44 16.95-13.16 18.41l-131.2 21.87C348.53 390.3 321.41 416 288 416c-35.35 0-64-28.65-64-64s28.65-64 64-64c26.09 0 48.44 15.66 58.41 38.05l130.97-21.83c8.53-1.49 16.93 4.44 18.4 13.16zM320 352c0-17.67-14.33-32-32-32s-32 14.33-32 32 14.33 32 32 32 32-14.33 32-32zM152 160c-13.26 0-24 10.74-24 24s10.74 24 24 24 24-10.74 24-24-10.74-24-24-24zm424 160c0 52.8-14.25 102.26-39.06 144.8-5.61 9.62-16.3 15.2-27.44 15.2h-443c-11.14 0-21.83-5.58-27.44-15.2C14.25 422.26 0 372.8 0 320 0 160.94 128.94 32 288 32s288 128.94 288 288zm-32 0c0-141.16-114.84-256-256-256S32 178.84 32 320c0 45.26 12 89.75 34.7 128.68l442.8-.68C532 409.75 544 365.26 544 320z"
                ></path>
              </svg>
            </template>
            <template v-slot:content>
              <h3>Rychlost</h3>
              <p>
                Rychlé načítání a lag free interakce je moje nejvyšší priorita.
              </p>
            </template>
          </service-card>
          <service-card>
            <template v-slot:icon>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="phone-laptop"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M608 128H416a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 352H416V160h192zM96 32h384v64h32V32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v256H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-32H63.91A32 32 0 0 1 32 320h320v-32H96z"
                ></path>
              </svg>
            </template>
            <template v-slot:content>
              <h3>Responsibilita</h3>
              <p>
                Moje řešení je přizpůsobeno všem zařízení.
              </p>
            </template>
          </service-card>
        </div>
        <div class="service__group">
          <service-card>
            <template v-slot:icon>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="lightbulb"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
              >
                <path
                  fill="currentColor"
                  d="M176 0C73.05 0-.12 83.54 0 176.24c.06 44.28 16.5 84.67 43.56 115.54C69.21 321.03 93.85 368.68 96 384l.06 75.18c0 3.15.94 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84L256 384c2.26-15.72 26.99-63.19 52.44-92.22C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0zm47.94 454.31L206.85 480h-61.71l-17.09-25.69-.01-6.31h95.9v6.31zm.04-38.31h-95.97l-.07-32h96.08l-.04 32zm60.4-145.32c-13.99 15.96-36.33 48.1-50.58 81.31H118.21c-14.26-33.22-36.59-65.35-50.58-81.31C44.5 244.3 32.13 210.85 32.05 176 31.87 99.01 92.43 32 176 32c79.4 0 144 64.6 144 144 0 34.85-12.65 68.48-35.62 94.68zM176 64c-61.75 0-112 50.25-112 112 0 8.84 7.16 16 16 16s16-7.16 16-16c0-44.11 35.88-80 80-80 8.84 0 16-7.16 16-16s-7.16-16-16-16z"
                ></path>
              </svg>
            </template>
            <template v-slot:content>
              <h3>Intiutivnost</h3>
              <p>
                Preferuji snadné používání a intuitivní UI/UX.
              </p>
            </template>
          </service-card>
          <service-card>
            <template v-slot:icon>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="rocket-launch"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M368.05829,88.0293a55.99512,55.99512,0,1,0,55.99215,55.99414A56.01694,56.01694,0,0,0,368.05829,88.0293Zm0,79.99218a23.998,23.998,0,1,1,23.99608-23.998A24.02247,24.02247,0,0,1,368.05829,168.02148ZM505.1656,19.29492C503.98982,13.832,498.18123,8.0293,492.71835,6.86133,460.63244,0,435.48793,0,410.45084,0,307.26342,0,245.38261,55.19727,199.18734,127.98828H95.01555c-16.293,0-35.58786,11.92188-42.87692,26.4961L2.73242,253.27344A28.4,28.4,0,0,0,.2168,263.97656a24.00493,24.00493,0,0,0,23.99607,23.998H128.13466a95.98845,95.98845,0,0,1,95.98625,95.99023V487.95508a24.00243,24.00243,0,0,0,23.99608,23.998,28.53884,28.53884,0,0,0,10.70116-2.51562l98.71671-49.40039c14.55663-7.28516,26.46678-26.5625,26.46678-42.83984V312.76758C456.568,266.46094,511.982,204.37109,511.982,101.69336,512.0738,76.54492,512.0738,51.39648,505.1656,19.29492ZM37.15427,255.97656l43.60152-87.18164c1.85156-3.70508,10.11523-8.81054,14.25976-8.81054h85.08c-13.93554,28.06054-31.71287,63.99609-47.55465,95.99218l.0664.45313C131.08778,256.377,61.01753,255.97656,37.15427,255.97656Zm314.8513,161.22071c0,4.13085-5.09179,12.375-8.789,14.22461L256.115,475.01172c0-23.90234-.4043-94.06055-.46094-95.60938l.36719.04688c31.99606-15.82617,67.80267-33.58984,95.85929-47.541l.125.002Zm-102.078-70.51368a127.62739,127.62739,0,0,0-84.6347-84.55468c52.02731-103.98633,99.76945-230.13282,245.158-230.13282,21.164,0,41.29684,0,65.41987,4.1875,4.26562,24.377,4.1914,44.38477,4.11523,65.50977C479.98594,246.66406,353.00752,295.1543,249.92753,346.68359Zm-147.494-26.71289C54.35347,319.9707,2.03125,359.31836.168,480H0v32H32v-.23242C203.617,508.42969,216.8885,396.74414,165.80065,345.40039,150.85925,330.38477,127.22255,319.9707,102.43351,319.9707Zm52.914,109.39844c-12.83593,31.14844-57.63667,49.42969-123.36709,50.55078.06446-3.55469-1.11914-127.88867,70.45307-127.88867,15.09569,0,31.11521,6.29492,40.81051,16.03906C156.05456,380.94336,164.6483,406.80273,155.34753,429.36914Z"
                ></path>
              </svg>
            </template>
            <template v-slot:content>
              <h3>Dynamičnost</h3>
              <p>
                Stránky nemusí být statické a rád je přivádím k životu.
              </p>
            </template>
          </service-card>
        </div>
      </header>
      <div>
        <p>
          Každý projekt rozděluji do několika fází:
          <b>analýza potřeb projektu</b>, <b>wireframing</b>,
          <b>design a vývoj</b>. Tento proces mi dovoluje vytvořit kvalitní
          produkt zaměřený na cíle klienta.
        </p>
      </div>
    </section>
    <section id="work" class="portfolio" role="main">
      <h2>Co dělám</h2>
      <div class="work__info">
        <info-card>
          <h3>Webové stránky</h3>
          <p>
            V dnešní době webové stránky soutěží o to, aby vynikli, a proto musí
            být vývoj webových aplikací kreativní.
          </p>
          <h4>Technologie</h4>
          <div class="info-card__technologies">
            <technology-tag
              :tagIcon="require('@/assets/icons/html.svg')"
              iconName="HTML"
              tagText="HTML"
            />
            <technology-tag
              :tagIcon="require('@/assets/icons/css.svg')"
              iconName="CSS"
              tagText="CSS"
            />
            <technology-tag
              :tagIcon="require('@/assets/icons/javascript.svg')"
              iconName="JavaScript"
              tagText="JavaScript"
            />
            <technology-tag
              :tagIcon="require('@/assets/icons/vuejs.svg')"
              iconName="VueJS"
              tagText="VueJS"
            />
            <technology-tag
              :tagIcon="require('@/assets/icons/nuxtjs.svg')"
              iconName="NuxtJS"
              tagText="NuxtJS"
            />
            <technology-tag
              :tagIcon="require('@/assets/icons/reactjs.svg')"
              iconName="ReactJS"
              tagText="ReactJS"
            />
            <technology-tag
              :tagIcon="require('@/assets/icons/svelte.svg')"
              iconName="SvelteJS"
              tagText="SvelteJS"
            />
            <technology-tag
              :tagIcon="require('@/assets/icons/tailwindcss.svg')"
              iconName="TailwindCSS"
              tagText="Tailwind"
            />
          </div>
          <svg
            class="info-card__bg-big"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              d="M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z"
            ></path>
          </svg>
        </info-card>
        <info-card>
          <h3>Mobilní aplikace</h3>
          <p>
            Mobilní aplikace vytvářím jako dokonalou reprezentaci vašeho produku
            s designem, který vyjadřuje charakter toho co nabízíte a jasně
            komunikuje vaši zprávu.
          </p>
          <h4>Technologie</h4>
          <div class="info-card__technologies">
            <technology-tag
              :tagIcon="require('@/assets/icons/flutter.svg')"
              iconName="Flutter"
              tagText="Flutter"
            />
            <technology-tag
              :tagIcon="require('@/assets/icons/swift.svg')"
              iconName="Swift"
              tagText="Swift"
            />
            <technology-tag
              :tagIcon="require('@/assets/icons/java.svg')"
              iconName="Java"
              tagText="Java"
            />
          </div>
          <svg
            class="info-card__bg-big"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M196 448h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zM320 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48zm-32 0c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V48z"
            ></path>
          </svg>
        </info-card>
      </div>
      <div class="work__offer">
        <h3>Jak vám mohu pomoci?</h3>
        <ul>
          <li>
            <h4>Vytvoření nového řešní od nuly</h4>
            <p>
              Máte skvělý nápad, ale váš tým nemá čas nebo dostatečné dovednosti
              na jeho realizaci? Pomohu vám s vizuálním designem vývojem
              softwaru i jeho testováním.
            </p>
          </li>
          <li>
            <h4>Vylepšení stávajícího produktu</h4>
            <p>
              Máte produkt, který je potřba posunout o úroveň výš? Zanalyzuji
              vaše současné řešení a vylepším co je potřeba – jako rychlost,
              design, funkce, zabezpečení a uživatelksý komfort.
            </p>
          </li>
          <li>
            <h4>Spolupráce na vašich projektech</h4>
            <p>
              Hledáte spolehlivou pomocnou ruku? S maximální flexibilitou na
              mojí straně pomohu vašemu týmu urychlit váš projekt a vaší firmě
              pomohu růst.
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section id="about" role="main">
      <h2>O mně</h2>
      <p>
        Jsem designér a Full Stack developer s více než 4 lety profesionálních
        zkušeností. Zaměřuji se na vývoj webů a webových aplikací včetně PWA
        (Progresivních Webových Aplikací). Také mám zkušenosti s vývojem
        desktopových a mobilních aplikací pro IOS i Android.
      </p>
      <h3>Technologie které používám</h3>
      <div class="technology__info">
        <technology-tag
          :tagIcon="require('@/assets/icons/html.svg')"
          iconName="HTML"
          tagText="HTML"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/css.svg')"
          iconName="CSS"
          tagText="CSS"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/javascript.svg')"
          iconName="JavaScript"
          tagText="JavaScript"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/php.svg')"
          iconName="PHP"
          tagText="PHP"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/git-icon.svg')"
          iconName="Git"
          tagText="Git"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/npm.svg')"
          iconName="npm"
          tagText="npm"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/webpack-icon.svg')"
          iconName="Webpack"
          tagText="Webpack"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/reactjs.svg')"
          iconName="ReactJS"
          tagText="ReactJS"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/vuejs.svg')"
          iconName="VueJS"
          tagText="VueJS"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/nuxtjs.svg')"
          iconName="NuxtJS"
          tagText="NuxtJS"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/svelte.svg')"
          iconName="SvelteJS"
          tagText="SvelteJS"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/flutter.svg')"
          iconName="Flutter"
          tagText="Flutter"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/swift.svg')"
          iconName="Swift"
          tagText="Swift"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/java.svg')"
          iconName="Java"
          tagText="Java"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/python.svg')"
          iconName="Python"
          tagText="Python"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/tailwindcss.svg')"
          iconName="TailwindCSS"
          tagText="Tailwind"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/graphql.svg')"
          iconName="GraphQL"
          tagText="GraphQL"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/nodejs.svg')"
          iconName="NodeJS"
          tagText="NodeJS"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/deno.svg')"
          iconName="Deno"
          tagText="Deno"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/mysql.svg')"
          iconName="MySQL"
          tagText="MySQL"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/mongodb.svg')"
          iconName="MongoDB"
          tagText="MongoDB"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/aws.svg')"
          iconName="AWS"
          tagText="AWS"
        />
        <technology-tag
          :tagIcon="require('@/assets/icons/firebase.svg')"
          iconName="Firebase"
          tagText="Firebase"
        />
      </div>
    </section>
    <section id="contact" role="main">
      <h2>Kontakt</h2>
      <p>
        Máte dotaz nebo chcete navázat spolupráci? Stačí vylpnit formulář níže
        nebo zaslat e-mail na adresu
        <a href="mailto:jan@janvitu.dev" class="link--bold">jan@janvitu.dev</a>
        a můžeme si promluvit o tom, jak vám mohu pomoci dosáhnout vašich
        obchodních cílů.
      </p>
      <contact-form />
      <keyboard />
    </section>
  </main>
  <footer>
    <p>
      © {{ new Date().getFullYear() }},
      <span class="text--highlighted">JAN VÍTŮ</span>
    </p>
    <div class="social-link">
      <a
        class="btn-link"
        title="GitHub"
        href="https://github.com/vituja"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          width="100"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            fill="currentColor"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          ></path>
        </svg>
        <span>GitHub</span>
      </a>
      <a
        class="btn-link"
        title="CodePen"
        href="https://codepen.io/vituja1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          width="100"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"
          ></path>
        </svg>
        <span>CodePen</span>
      </a>
    </div>
    <nav class="navigation--small">
      <ul>
        <li><a href="#home" class="link-foot">Domů</a></li>
        <li><a href="#service" class="link-foot">Jak pracuji</a></li>
        <li><a href="#work" class="link-foot">Co dělám</a></li>
        <li><a href="#about" class="link-foot">O mně</a></li>
        <li><a href="#contact" class="link-foot">Kontakt</a></li>
      </ul>
    </nav>
    <p>
      Tato stránka byla vytvořena za viužití nástrojů
      <a href="https://affinity.serif.com/en-gb/designer/" class="link-foot"
        >Affinity&nbsp;Designer</a
      >,
      <a href="https://code.visualstudio.com/" class="link-foot">
        Visual&nbsp;Studio&nbsp;Code</a
      >,
      <a href="https://neovim.io" class="link-foot">
        Neovim
      </a>
      &
      <a href="https://www.browserstack.com/" class="link-foot">
        Browser&nbsp;Stack
      </a>
      . Využitý font
      <a
        href="https://fonts.google.com/specimen/Nunito+Sans?preview.text=Lorem%20ipsum%20at%20dolor&preview.text_type=custom&query=nunito"
        target="blank"
        class="link-foot"
      >
        Nunito&nbsp;Sans
      </a>
      .
    </p>
  </footer>
</template>

<script>
import { onMounted, ref } from "vue"

import validateFormFields from "@/use/useFormValidator.js"
import rippleEffect from "@/use/useMdnRippleEffect.js"

import Hamburger from "@/components/Hamburger.vue"
import ServiceCard from "@/components/serviceCard.vue"
import InfoCard from "@/components/infoCard.vue"
import TechnologyTag from "@/components/technologyTag.vue"
import ContactForm from "@/components/contactForm.vue"
import Keyboard from "@/components/Keyboard.vue"

export default {
  name: "portfolio",
  components: {
    Hamburger,
    ServiceCard,
    InfoCard,
    TechnologyTag,
    ContactForm,
    Keyboard
  },
  setup() {
    const navIsOpen = ref(false)
    const updateNav = () => {
      navIsOpen.value = !navIsOpen.value
    }
    const closeNav = () => {
      navIsOpen.value = false
    }
    onMounted(() => {
      const validationFields = document.querySelectorAll(
        ".text-field, .text-area"
      )
      validateFormFields(validationFields)
    })
    // function test() {
    //   document.documentElement.setAttribute("lang", "en")
    // }
    return {
      navIsOpen,
      updateNav,
      closeNav,
      rippleEffect
    }
  }
}
</script>

<style lang="scss" scoped></style>
