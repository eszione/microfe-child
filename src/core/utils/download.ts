export const download = (blobUrl, downloadFileName) => {
    // create a link locally to download the file
    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    downloadLink.href = blobUrl;
    downloadLink.setAttribute('download', downloadFileName);
    if (typeof downloadLink.download === 'undefined') {
        downloadLink.setAttribute('target', '_blank');
        downloadLink.setAttribute('rel', 'noreferrer');
    }
    document.body.appendChild(downloadLink);
    downloadLink.click(); // force click the link to initiate download
    // cleanup
    document.body.removeChild(downloadLink);
    window.URL.revokeObjectURL(blobUrl);
};
