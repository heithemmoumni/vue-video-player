# Video Player


## Usage

```js
import MediaElement from '../src/MediaElement.vue'

Vue.component('video-player', MediaElement)

// or
new Vue({
  el: 'app',
  components: { MediaElement }
})
```

```html
<video-player id="video"  poster="demo/assets/poster.jpg" :sources="[
				{src: 'http://www.streambox.fr/playlists/test_001/stream.m3u8', type: 'application/x-mpegURL'},
				{src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', type: 'video/mp4'},
				{src: 'rtmp://firehose.cul.columbia.edu:1935/vod/mp4:sample.mp4', type: 'video/rtmp'}
        ]">
</video-player>
```


