import Tabs from "./Tabs";


const TabsMain = () => {
    const tabs = [
        { 
          label: 'Microsoft', 
          icon: 'https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png', // Replace with actual image URL
          src: 'https://i.postimg.cc/65BK5VzD/Rectangle-61.png', // Replace with actual image URL
          h1:'Meet MICROSOFT',
          p:'Explore Microsoft products and servicesfor your home or business. Shop Surface, Microsoft 365, Xbox, Windows, Azure'

        },
        { 
          label: 'Kaspersky', 
          icon: 'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2019/07/18041948/kaspersky-rebranding-in-details-1.jpg', // Replace with actual image URL
          src: 'https://i.postimg.cc/MKvLkwHz/Rectangle-61-1.png',
          h1:'Secure with KASPERSKY',
          p:'Keep your internet use safe and private and your devices running smoothly with one of our award-winning, easy-to-use security plans.' // Replace with actual image URL
        },
        { 
          label: 'Oracle', 
          icon: 'https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo.jpg', // Replace with actual image URL
          src: 'https://i.postimg.cc/WzpQqJsZ/Rectangle-61-2.png',
          h1:'Connect ORACLE',
          p:'Oracle Exadata Exascale: the world’s only intelligent data architecture for cloud' // Replace with actual image URL
        },
        { 
            label: 'Cisco', 
            icon: 'https://allvectorlogo.com/wp-content/uploads/2016/03/cisco-logo.png', // Replace with actual image URL
            src: 'https://i.postimg.cc/85G8D03t/Rectangle-61-4.png',
            h1:'CISCO Supports Network',
            p:'Cisco is the worldwide technology leader that has been making the Internet work securely connect and seize tomorrows opportunity today.' // Replace with actual image URL
          },
          { 
            label: 'Aws', 
            icon: 'https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg', // Replace with actual image URL
            src: 'https://i.postimg.cc/DzLV9TCS/Rectangle-61-3.png',
            h1:'Infrastructure with AWS',
            p:'Global Infrastructure — Build, Deploy, and Manage Websites, Apps or Processes On AWS Secure, Reliable Network. Sign Up for a Free Account & Experience' // Replace with actual image URL
          },
          { 
            label: 'Sophos', 
            icon: 'https://1000logos.net/wp-content/uploads/2020/08/Sophos-Logo.jpg', // Replace with actual image URL
            src: 'https://i.postimg.cc/RFLk0Tx9/Rectangle-61-5.png',
            h1:'Explore SOPHOS',
            p:'provides unmatched protection and is uniquely integrated to share information and coordinate a response like no other cybersecurity solution.' // Replace with actual image URL
          },
          { 
            label: 'Fortinet', 
            icon: 'https://csltraining.com/wp-content/uploads/2020/10/Fortinet.jpg', // Replace with actual image URL
            src: 'https://i.postimg.cc/zG9Z2Bkm/Rectangle-61-6.png',
            h1:'Meet FORTINET',
            p:'Fortinet, Inc. is a cybersecurity company with headquarters in Sunnyvale, California. The company develops and sells security.' // Replace with actual image URL
          },
          { 
            label: 'Vmware', 
            icon: 'https://i.postimg.cc/Wp7HHfjG/92-925106-vmware-workstation-logo-png-removebg-preview.png', // Replace with actual image URL
            src: 'https://i.postimg.cc/8zFgbWMB/Rectangle-61-7.png',
            h1:'Virtualize with VMWARE',
            p:'VMware virtualizes physical computers using its core hypervisor product. A hypervisor is a slayer of software that interacts resources' // Replace with actual image URL
          },
      ];
  return (
    <div>
        <div className="">
      <Tabs tabs={tabs} />
    </div>
    </div>
  )
}

export default TabsMain