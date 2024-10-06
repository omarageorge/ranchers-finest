'use client';

const DownloadCatalog = () => {
  const handleFileDownload = () => {
    const fileUrl = '/Ranchers Finest Catalog.pdf';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'Ranchers Finest Catalog.pdf');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleFileDownload}
      className='w-fit px-8 py-4 bg-red hover:bg-yellow rounded-full font-bold text-xl text-white hover:text-black transition-all duration-300 ease-in'
    >
      Get Our Catalog
    </button>
  );
};

export default DownloadCatalog;
