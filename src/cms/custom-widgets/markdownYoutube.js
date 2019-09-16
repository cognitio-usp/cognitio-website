import CMS from 'netlify-cms-app';

function getVideoId(url) {
  if (url) {
    const urlArr = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return urlArr[2] !== undefined
      ? urlArr[2].split(/[^0-9a-z_-]/i)[0]
      : urlArr[0];
  }

  return '';
}

export function addMarkdownYoutubeWidget() {
  CMS.registerEditorComponent({
    // Internal id of the component
    id: 'youtube',
    // Visible label
    label: 'Youtube',
    // Fields the user need to fill out when adding an instance of the component
    fields: [{ name: 'url', label: 'Youtube Video URL', widget: 'string' }],
    // Pattern to identify a block as being an instance of this component
    pattern: /^<p class="youtube"><iframe src="(.*)" frameborder="0" allowfullscreen><\/iframe><\/p>/,
    // Function to extract data elements from the regexp match
    fromBlock(match) {
      return {
        url: `https://www.youtube.com/watch?v=${getVideoId(match[1])}`,
      };
    },
    // Function to create a text block from an instance of this component
    toBlock(obj) {
      return `<p class="youtube"><iframe src="https://www.youtube.com/embed/${getVideoId(
        obj.url,
      )}" frameborder="0" allowfullscreen></iframe></p>`;
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview(obj) {
      return `<p class="youtube"><iframe src="https://www.youtube.com/embed/${getVideoId(
        obj.url,
      )}" frameborder="0" allowfullscreen></iframe></p>`;
    },
  });
}
