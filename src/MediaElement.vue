<template>
  <section>
    <video id="video" :poster="poster" :preload="preload" controls>
      <source
        v-for="source in sources"
        :key="source.src"
        :src="source.src"
        :type="source.type"
      />
    </video>
  </section>
</template>

<script>
import "mediaelement";
import "mediaelement/build/renderers/facebook.min.js";
import "mediaelement/build/mediaelementplayer.min.css";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    sources: {
      type: Array,
      required: true,
    },
    poster: {
      type: String,
    },
    muted: {
      type: Boolean,
      default: true,
    },
    preload: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },
  watch: {},
  mounted() {
    this.options = {
      stretching: "responsive",
      previewMode: false,
      poster: this.poster,
      shimScriptAccess: "always",
      success: (mediaElement, node, instance) => {
        mediaElement.load();
      },
    };
    this.player = this.playerObejct = new MediaElementPlayer(
      this.id,
      this.options
    );
  },
};
</script>

<style>
.mejs__overlay-button {
  outline: none !important;
}
.mejs__video {
  margin-bottom: 1.5rem;
}
video {
  max-width: 100%;
}
iframe {
  width: 100%;
  height: 100%;
}
:root .mejs__poster img {
  display: block !important;
}
</style>
