<template>
  <v-row justify="center" align="center">
    <article>
      <h1>Select over the text below</h1>
      <p>
        <em>Lorem ipsum</em>, or <em>lipsum</em> as it is sometimes known, is
        dummy text used in laying out print, graphic or web designs. The passage
        is attributed to an unknown typesetter in the 15th century who is
        thought to have scrambled parts of Cicero's
        <em>De Finibus Bonorum et Malorum</em> for use in a type specimen book.
        It usually begins with:
      </p>
      <blockquote>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.”
      </blockquote>
      <p>
        The purpose of <em>lorem ipsum</em> is to create a natural looking block
        of text (sentence, paragraph, page, etc.) that doesn't distract from the
        layout. A practice not without controversy, laying out pages with
        meaningless filler text can be very useful when the focus is meant to be
        on design, not content.
      </p>
      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of
        <em>lorem ipsum</em>.
      </p>
      <p>
        <em>Lorem ipsum</em>, or <em>lipsum</em> as it is sometimes known, is
        dummy text used in laying out print, graphic or web designs. The passage
        is attributed to an unknown typesetter in the 15th century who is
        thought to have scrambled parts of Cicero's
        <em>De Finibus Bonorum et Malorum</em> for use in a type specimen book.
        It usually begins with:
      </p>
      <blockquote>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.”
      </blockquote>
      <p>
        The purpose of <em>lorem ipsum</em> is to create a natural looking block
        of text (sentence, paragraph, page, etc.) that doesn't distract from the
        layout. A practice not without controversy, laying out pages with
        meaningless filler text can be very useful when the focus is meant to be
        on design, not content.
      </p>
      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of
        <em>lorem ipsum</em>.
      </p>
      <p>
        <em>Lorem ipsum</em>, or <em>lipsum</em> as it is sometimes known, is
        dummy text used in laying out print, graphic or web designs. The passage
        is attributed to an unknown typesetter in the 15th century who is
        thought to have scrambled parts of Cicero's
        <em>De Finibus Bonorum et Malorum</em> for use in a type specimen book.
        It usually begins with:
      </p>
      <blockquote>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.”
      </blockquote>
      <p>
        The purpose of <em>lorem ipsum</em> is to create a natural looking block
        of text (sentence, paragraph, page, etc.) that doesn't distract from the
        layout. A practice not without controversy, laying out pages with
        meaningless filler text can be very useful when the focus is meant to be
        on design, not content.
      </p>
      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of
        <em>lorem ipsum</em>.
      </p>
      <p>
        <em>Lorem ipsum</em>, or <em>lipsum</em> as it is sometimes known, is
        dummy text used in laying out print, graphic or web designs. The passage
        is attributed to an unknown typesetter in the 15th century who is
        thought to have scrambled parts of Cicero's
        <em>De Finibus Bonorum et Malorum</em> for use in a type specimen book.
        It usually begins with:
      </p>
      <blockquote>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.”
      </blockquote>
      <p>
        The purpose of <em>lorem ipsum</em> is to create a natural looking block
        of text (sentence, paragraph, page, etc.) that doesn't distract from the
        layout. A practice not without controversy, laying out pages with
        meaningless filler text can be very useful when the focus is meant to be
        on design, not content.
      </p>
      <p>
        The passage experienced a surge in popularity during the 1960s when
        Letraset used it on their dry-transfer sheets, and again during the 90s
        as desktop publishers bundled the text with their software. Today it's
        seen all around the web; on templates, websites, and stock designs. Use
        our generator to get your own, or read on for the authoritative history
        of
        <em>lorem ipsum</em>.
      </p>
    </article>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      selectedTxt: '',
      posY: 0,
    }
  },
  created() {
    this.handleQuery()
  },

  mounted() {
    document.addEventListener('mouseup', this.handlerFunction, false)
  },
  methods: {
    handleQuery() {
      setTimeout(() => {
        window.scrollTo({
          top: this.$route.query.posY,
          behavior: 'smooth',
        })
      }, 100)
    },
    async handleSelectedTxt() {
      const _id = Date.now()
      await this.$axios.$put(`/api/selected-txt/`, {
        [`${_id}`]: this.selectedTxt,
        posY: this.posY,
      })
      const result = await this.$axios.$get(`/api/selected-txt/${_id}`)

      const url = this.$router.resolve({
        path: '/',
        query: { ...result },
      })

      window.open(url.href, '_blank')
    },
    handlerFunction(event) {
      if (document.contains(document.querySelector('#share-snippet'))) {
        document.querySelector('#share-snippet').remove()
      }

      // Check if any text was selected
      if (window.getSelection().toString().length > 0) {
        const scrollTop =
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop
        // Get selected text and encode it
        // this.selectedTxt = encodeURIComponent(
        //   window.getSelection().toString()
        // ).replace(/[!'()*]/g, escape)
        this.selectedTxt = window.getSelection().toString()

        const rect = window.getSelection().getRangeAt(0).getBoundingClientRect()
        const posX = rect.left + rect.width / 2 - 40
        const _posY = rect.top - 48 + scrollTop
        this.posY = scrollTop
        // Append HTML to the body, create dialog
        document.body.insertAdjacentHTML(
          'beforeend',
          '<div id="share-snippet" style="position: absolute; top: ' +
            _posY +
            'px; left: ' +
            posX +
            'px;"><div class="speech-bubble"><div class="share-inside">Click Go</div></div></div>'
        )

        if (document.contains(document.querySelector('.share-inside'))) {
          document
            .querySelector('.share-inside')
            .addEventListener('mouseup', this.handleSelectedTxt)
        }
      }
    },
  },
  watch: {},
}
</script>
<style lang="scss">
body {
  background-image: linear-gradient(45deg, beige, azure);
  font-family: 'crimson text';

  article {
    background: white;
    border-radius: 4px;
    font-size: 13pt;
    margin: auto;
    padding: 30px;
    position: absolute;
    text-align: justify;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 600px;
    h1 {
      font-size: 17pt;
      text-align: center;
      text-decoration-line: underline;
      text-decoration-color: yellow;
      margin-bottom: 20px;
    }
  }
  .speech-bubble {
    position: relative;
    background: #26547c;
    border-radius: 0.4em;
    color: white;
  }

  .speech-bubble:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-top-color: #26547c;
    border-bottom: 0;
    margin-left: -12px;
    margin-top: -12px;
  }

  .share-inside {
    background-image: url('../assets/img/linkicon.png');
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 24px 19px;
    display: inline-block;
    text-decoration: none;
    color: #ffffff;
    font-size: 14px;
    padding: 10px;
    padding-left: 40px;
    cursor: pointer;
  }
}
</style>
