<script setup lang="ts">
const route = useRoute()
const { data: home } = await useAsyncData(() => queryCollection('content').path(route.path).first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})

interface VideoSubtitle {
  startTime: number
  endTime: number
  text: string
}

interface IntroVideo {
  title: string
  thumbnailName: string
  posterName: string
  videoAssetName: string
  subtitles: VideoSubtitle[]
}

const videos: IntroVideo[] = [
  {
    title: "Welcome",
    thumbnailName: "1-intro-v2-small-image",
    posterName: "1-intro-v2-poster",
    videoAssetName: "1-intro-v2-small",
    subtitles: [
      { startTime: 0.020, endTime: 1.520, text: "Hey, welcome to Arké." },
      { startTime: 2.420, endTime: 4.100, text: "You're about to try something new." },
      { startTime: 4.760, endTime: 7.060, text: "A bitcoin wallet built for real payments." },
      { startTime: 7.860, endTime: 10.200, text: "Fast, cheap, and fully yours." },
      { startTime: 11.260, endTime: 15.200, text: "Before you dive in, my friends are going to walk you through how things work." }
    ]
  },
  {
    title: "You're early",
    thumbnailName: "2-testing-cherry-blossom-v2-small-image",
    posterName: "2-testing-cherry-blossom-v2-poster",
    videoAssetName: "2-testing-cherry-blossom-v2-small",
    subtitles: [
      { startTime: 0.020, endTime: 1.300, text: "First, a heads up." },
      { startTime: 1.900, endTime: 2.280, text: "You're early." },
      { startTime: 3.000, endTime: 4.200, text: "Arké is still in testing." },
      { startTime: 4.900, endTime: 6.320, text: "The bitcoin in here isn't real." },
      { startTime: 6.660, endTime: 7.320, text: "It's play money." },
      { startTime: 8.080, endTime: 10.080, text: "That means you can try everything without risk." },
      { startTime: 10.780, endTime: 12.720, text: "It also means things might break sometimes." },
      { startTime: 13.460, endTime: 13.960, text: "That's fine." },
      { startTime: 14.500, endTime: 15.560, text: "That's what testing is for." }
    ]
  },
  {
    title: "It's yours",
    thumbnailName: "3-ownership-v2-small-image",
    posterName: "3-ownership-v2-poster",
    videoAssetName: "3-ownership-v2-small",
    subtitles: [
      { startTime: 0.020, endTime: 2.260, text: "This wallet belongs entirely to you." },
      { startTime: 2.850, endTime: 6.560, text: "No accounts, no logins, no company holding your funds." },
      { startTime: 7.360, endTime: 9.220, text: "You'll get a 12 word recovery phrase," },
      { startTime: 9.670, endTime: 12.740, text: "and your wallet will back up data to iCloud automatically." },
      { startTime: 13.520, endTime: 15.260, text: "You need both to restore your wallet." },
      { startTime: 15.850, endTime: 19.840, text: "So keep your phrase somewhere safe and stay signed in to iCloud." }
    ]
  },
  {
    title: "Instant payments",
    thumbnailName: "4-speed-small-image",
    posterName: "4-speed-poster",
    videoAssetName: "4-speed-small",
    subtitles: [
      { startTime: 0.020, endTime: 2.720, text: "So why Arké instead of a regular bitcoin wallet?" },
      { startTime: 4.100, endTime: 5.560, text: "Normally bitcoin payments are slow." },
      { startTime: 6.600, endTime: 8.780, text: "You wait for confirmations, fees add up." },
      { startTime: 9.320, endTime: 10.660, text: "It's not great for grabbing coffee." },
      { startTime: 11.760, endTime: 12.620, text: "Arké fixes that." },
      { startTime: 13.520, endTime: 15.820, text: "Payments arrive in seconds, fees are almost nothing." },
      { startTime: 16.580, endTime: 18.400, text: "Same bitcoin, just a better experience." }
    ]
  },
  {
    title: "Two balances",
    thumbnailName: "5-two-balances-v2-small-image",
    posterName: "5-two-balances-v2-poster",
    videoAssetName: "5-two-balances-v2-small",
    subtitles: [
      { startTime: 0.020, endTime: 3.780, text: "One thing to know, your wallet has two balances." },
      { startTime: 5.000, endTime: 6.520, text: "Savings is for holding." },
      { startTime: 7.460, endTime: 10.900, text: "Fully independent, nothing to rely on but yourself." },
      { startTime: 12.240, endTime: 14.380, text: "Spending is for everyday use." },
      { startTime: 15.060, endTime: 17.080, text: "Instant payments, tiny fees." },
      { startTime: 18.180, endTime: 21.500, text: "It uses a coordination server to make things fast." },
      { startTime: 22.400, endTime: 26.240, text: "But that server can never access your money or see your balance." },
      { startTime: 27.140, endTime: 30.280, text: "You can move funds between them whenever you like." }
    ]
  },
  {
    title: "Get started",
    thumbnailName: "6-get-started-small-image",
    posterName: "6-get-started-poster",
    videoAssetName: "6-get-started-small",
    subtitles: [
      { startTime: 0.020, endTime: 1.440, text: "That's really all you need to know." },
      { startTime: 2.620, endTime: 7.800, text: "Once you're set up, grab some free test bitcoin and try your first payment." },
      { startTime: 8.660, endTime: 9.460, text: "See how it feels." },
      { startTime: 10.340, endTime: 11.080, text: "Break things." },
      { startTime: 11.780, endTime: 12.820, text: "Let us know what's broken." },
      { startTime: 13.740, endTime: 15.240, text: "You're not just a user here." },
      { startTime: 15.940, endTime: 17.420, text: "You're helping us build this." },
      { startTime: 18.460, endTime: 18.720, text: "Ready?" }
    ]
  }
]

const currentVideoIndex = ref(0)
const videoElement = ref<HTMLVideoElement | null>(null)
const currentSubtitle = ref('')
const showMenu = ref(false)
const isMuted = ref(false)
const isPlaying = ref(false)

const currentVideo = computed(() => videos[currentVideoIndex.value])

const playNextVideo = () => {
  if (currentVideoIndex.value < videos.length - 1) {
    currentVideoIndex.value++
    nextTick(() => {
      if (videoElement.value) {
        videoElement.value.play()
        isPlaying.value = true
      }
    })
  }
}

const selectVideo = (index: number) => {
  currentVideoIndex.value = index
  showMenu.value = false
  nextTick(() => {
    if (videoElement.value) {
      videoElement.value.play()
      isPlaying.value = true
    }
  })
}

const togglePlayPause = () => {
  if (videoElement.value) {
    if (videoElement.value.paused) {
      videoElement.value.play()
      isPlaying.value = true
    } else {
      videoElement.value.pause()
      isPlaying.value = false
    }
  }
}

const toggleMute = () => {
  isMuted.value = !isMuted.value
  if (videoElement.value) {
    videoElement.value.muted = isMuted.value
  }
}

const updateSubtitle = () => {
  if (!videoElement.value) return
  
  const currentTime = videoElement.value.currentTime
  const subtitle = currentVideo.value.subtitles.find(
    sub => currentTime >= sub.startTime && currentTime <= sub.endTime
  )
  
  currentSubtitle.value = subtitle ? subtitle.text : ''
}
</script>

<template>
  <div class="content-page intro-page">
    <div class="header">
      <NuxtLink to="/">Arké</NuxtLink>
    </div>

    <div class="video-container">
      <video
        ref="videoElement"
        :key="currentVideo.videoAssetName"
        :src="`/assets/videos/${currentVideo.videoAssetName}.mp4`"
        :poster="`/assets/images/${currentVideo.posterName}.jpg`"
        playsinline
        @ended="playNextVideo"
        @timeupdate="updateSubtitle"
        @click="togglePlayPause"
      />
      
      <Transition name="fade">
        <button 
          v-if="!isPlaying" 
          class="play-button" 
          @click="togglePlayPause"
          aria-label="Play video"
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)" />
            <path d="M32 25 L32 55 L55 40 Z" fill="#000" />
          </svg>
        </button>
      </Transition>
      
      <div v-if="currentSubtitle" class="subtitle">
        {{ currentSubtitle }}
      </div>

      <div class="video-controls">
        <button 
          class="audio-button" 
          @click.stop="toggleMute"
          :aria-label="isMuted ? 'Unmute' : 'Mute'"
        >
          <svg v-if="isMuted" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z"/>
            <line x1="23" y1="9" x2="17" y2="15"/>
            <line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        </button>

        <button 
          class="menu-button" 
          @click.stop="showMenu = !showMenu"
          :aria-label="showMenu ? 'Close menu' : 'Open menu'"
        >
          <svg v-if="!showMenu" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <Transition name="menu">
        <div v-if="showMenu" class="video-menu" @click.stop>
          <div 
            v-for="(video, index) in videos" 
            :key="video.videoAssetName"
            class="video-menu-item"
            :class="{ active: index === currentVideoIndex }"
            @click="selectVideo(index)"
          >
            <img 
              :src="`/assets/images/${video.thumbnailName}.jpg`" 
              :alt="video.title"
              class="menu-thumbnail"
            />
            <span class="menu-title">{{ video.title }}</span>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.intro-page {
  position: relative;
  width: 100%;
  height: 100vh; /* fallback for older browsers */
  height: 100dvh; /* respects mobile browser UI */
  overflow: hidden;
  background: #000;

  .header {
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 24px 32px;
    
    a {
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      text-decoration: none;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
  }

  .video-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    video {
      width: 100%;
      height: 100%;
      object-fit: contain;
      cursor: pointer;

      @media (max-width: 768px) {
        object-fit: cover;
      }
    }

    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: none;
      background: none;
      cursor: pointer;
      z-index: 5;
      transition: all 0.2s ease;
      
      &:hover {
        transform: translate(-50%, -50%) scale(1.1);
      }
      
      &:active {
        transform: translate(-50%, -50%) scale(0.95);
      }
      
      svg {
        filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
      }
    }

    .subtitle {
      position: absolute;
      bottom: 120px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 600;
      max-width: 90%;
      text-align: center;
      pointer-events: none;

      @media (max-width: 768px) {
        bottom: 100px;
        font-size: 16px;
        padding: 10px 20px;
      }
    }

    .video-controls {
      position: absolute;
      top: 24px;
      right: 24px;
      display: flex;
      gap: 12px;
      z-index: 20;

      .audio-button,
      .menu-button {
        width: 48px;
        height: 48px;
        border: none;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        backdrop-filter: blur(10px);
        
        &:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.05);
        }
        
        &:active {
          transform: scale(0.95);
        }
        
        svg {
          width: 24px;
          height: 24px;
        }
      }
    }

    .video-menu {
      position: absolute;
      top: 80px;
      right: 24px;
      width: 320px;
      max-height: calc(100vh - 112px);
      background: rgba(0, 0, 0, 0.95);
      border-radius: 12px;
      overflow-y: auto;
      backdrop-filter: blur(20px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
      z-index: 15;

      @media (max-width: 768px) {
        width: calc(100vw - 48px);
        right: 24px;
        max-height: calc(100vh - 96px);
      }

      .video-menu-item {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 10px;
        cursor: pointer;
        transition: background 0.2s ease;
        border-radius: 15px;
        
        &:last-child {
          border-bottom: none;
        }
        
        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        &.active {
          background: rgba(255, 255, 255, 0.15);
          
          .menu-title {
            color: #fff;
            font-weight: 600;
          }
        }

        .menu-thumbnail {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 10px;
          flex-shrink: 0;

          @media (max-width: 768px) {
            
          }
        }

        .menu-title {
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          flex: 1;

          @media (max-width: 768px) {
            //font-size: 0.875rem;
          }
        }
      }
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

/*

IntroVideo(
            title: "Welcome",
            thumbnailName: "1-intro-v2-small-image",
            videoAssetName: "1-intro-v2-small",
            subtitles: [
                VideoSubtitle(startTime: 0.020, endTime: 1.520, text: "Hey, welcome to Arké."),
                VideoSubtitle(startTime: 2.420, endTime: 4.100, text: "You're about to try something new."),
                VideoSubtitle(startTime: 4.760, endTime: 7.060, text: "A Bitcoin wallet built for real payments."),
                VideoSubtitle(startTime: 7.860, endTime: 10.200, text: "Fast, cheap, and fully yours."),
                VideoSubtitle(startTime: 11.260, endTime: 15.200, text: "Before you dive in, my friends are going to walk you through how things work.")
            ]
        ),
        IntroVideo(
            title: "You're early",
            thumbnailName: "2-testing-cherry-blossom-v2-small-image",
            videoAssetName: "2-testing-cherry-blossom-v2-small",
            subtitles: [
                VideoSubtitle(startTime: 0.020, endTime: 1.300, text: "First, a heads up."),
                VideoSubtitle(startTime: 1.900, endTime: 2.280, text: "You're early."),
                VideoSubtitle(startTime: 3.000, endTime: 4.200, text: "Arké is still in testing."),
                VideoSubtitle(startTime: 4.900, endTime: 6.320, text: "The Bitcoin in here isn't real."),
                VideoSubtitle(startTime: 6.660, endTime: 7.320, text: "It's play money."),
                VideoSubtitle(startTime: 8.080, endTime: 10.080, text: "That means you can try everything without risk."),
                VideoSubtitle(startTime: 10.780, endTime: 12.720, text: "It also means things might break sometimes."),
                VideoSubtitle(startTime: 13.460, endTime: 13.960, text: "That's fine."),
                VideoSubtitle(startTime: 14.500, endTime: 15.560, text: "That's what testing is for.")
            ]
        ),
        IntroVideo(
            title: "It's yours",
            thumbnailName: "3-ownership-v2-small-image",
            videoAssetName: "3-ownership-v2-small",
            subtitles: [
                VideoSubtitle(startTime: 0.020, endTime: 2.260, text: "This wallet belongs entirely to you."),
                VideoSubtitle(startTime: 2.850, endTime: 6.560, text: "No accounts, no logins, no company holding your funds."),
                VideoSubtitle(startTime: 7.360, endTime: 9.220, text: "You'll get a 12 word recovery phrase,"),
                VideoSubtitle(startTime: 9.670, endTime: 12.740, text: "and your wallet will back up data to iCloud automatically."),
                VideoSubtitle(startTime: 13.520, endTime: 15.260, text: "You need both to restore your wallet."),
                VideoSubtitle(startTime: 15.850, endTime: 19.840, text: "So keep your phrase somewhere safe and stay signed in to iCloud.")
            ]
        ),
        IntroVideo(
            title: "Instant payments",
            thumbnailName: "4-speed-small-image",
            videoAssetName: "4-speed-small",
            subtitles: [
                VideoSubtitle(startTime: 0.020, endTime: 2.720, text: "So why Arké instead of a regular Bitcoin wallet?"),
                VideoSubtitle(startTime: 4.100, endTime: 5.560, text: "Normally Bitcoin payments are slow."),
                VideoSubtitle(startTime: 6.600, endTime: 8.780, text: "You wait for confirmations, fees add up."),
                VideoSubtitle(startTime: 9.320, endTime: 10.660, text: "It's not great for grabbing coffee."),
                VideoSubtitle(startTime: 11.760, endTime: 12.620, text: "Arké fixes that."),
                VideoSubtitle(startTime: 13.520, endTime: 15.820, text: "Payments arrive in seconds, fees are almost nothing."),
                VideoSubtitle(startTime: 16.580, endTime: 18.400, text: "Same Bitcoin, just a better experience.")
            ]
        ),
        IntroVideo(
            title: "Two balances",
            thumbnailName: "5-two-balances-v2-small-image",
            videoAssetName: "5-two-balances-v2-small",
            subtitles: [
                VideoSubtitle(startTime: 0.020, endTime: 3.780, text: "One thing to know, your wallet has two balances."),
                VideoSubtitle(startTime: 5.000, endTime: 6.520, text: "Savings is for holding."),
                VideoSubtitle(startTime: 7.460, endTime: 10.900, text: "Fully independent, nothing to rely on but yourself."),
                VideoSubtitle(startTime: 12.240, endTime: 14.380, text: "Spending is for everyday use."),
                VideoSubtitle(startTime: 15.060, endTime: 17.080, text: "Instant payments, tiny fees."),
                VideoSubtitle(startTime: 18.180, endTime: 21.500, text: "It uses a coordination server to make things fast."),
                VideoSubtitle(startTime: 22.400, endTime: 26.240, text: "But that server can never access your money or see your balance."),
                VideoSubtitle(startTime: 27.140, endTime: 30.280, text: "You can move funds between them whenever you like.")
            ]
        ),
        IntroVideo(
            title: "Get started",
            thumbnailName: "6-get-started-small-image",
            videoAssetName: "6-get-started-small",
            subtitles: [
                VideoSubtitle(startTime: 0.020, endTime: 1.440, text: "That's really all you need to know."),
                VideoSubtitle(startTime: 2.620, endTime: 7.800, text: "Once you're set up, grab some free test Bitcoin and try your first payment."),
                VideoSubtitle(startTime: 8.660, endTime: 9.460, text: "See how it feels."),
                VideoSubtitle(startTime: 10.340, endTime: 11.080, text: "Break things."),
                VideoSubtitle(startTime: 11.780, endTime: 12.820, text: "Let us know what's broken."),
                VideoSubtitle(startTime: 13.740, endTime: 15.240, text: "You're not just a user here."),
                VideoSubtitle(startTime: 15.940, endTime: 17.420, text: "You're helping us build this."),
                VideoSubtitle(startTime: 18.460, endTime: 18.720, text: "Ready?")
            ]
        )

        */