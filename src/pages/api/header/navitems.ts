import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   const navItems = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: '2 Layer Lucky Bumboo', link: 'https://www.amazon.in/Treebazar-Layer-Bamboo-Indoor-Stones/dp/B0GJTFYW6W/ref=lp_27943762031_1_1?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
    { id: 3, title: '3 Layer Lucky Bumboo', link: 'https://www.amazon.in/Treebazar-Live-Indoor-Plant-Natural/dp/B0GJTLWT6V/ref=lp_27943762031_1_2?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
    { id: 4, title: '5 Layer Lucky Bumboo', link: 'https://www.amazon.in/Layer-Lucky-Bamboo-Indoor-Plant/dp/B0GKWFZSFX/ref=lp_27943762031_1_8?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=JJYBVQDHXTSF8X2DJ6KK&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
    { id: 5, title: 'Echeveria Laui', link: 'https://www.amazon.in/Echeveria-Laui-Live-Succulent-Plant/dp/B0GL46BN37/ref=lp_27943762031_1_3?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
    { id: 6, title: 'Zebra Haworthia', link: 'https://www.amazon.in/Haworthia-Succulent-Decorative-Maintenance-Purifying/dp/B0GKTJDX9N/ref=lp_27943762031_1_4?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
    { id: 7, title: 'Live Money Plant', link: 'https://www.amazon.in/dp/B0GM8KN79S/ref=lp_27943762031_1_5?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
    { id: 8, title: 'Live Snake Plant', link: 'https://www.amazon.in/dp/B0GM8KCLSL/ref=lp_27943762031_1_6?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
    { id: 9, title: 'Gymnocalycium Bruchii', link: 'https://www.amazon.in/Gymnocalycium-Bruchii-Flowering-Succulent-Decorative/dp/B0GL6LCDDY/ref=lp_27943762031_1_7?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
    { id: 10, title: 'Succulent & Cactus', link: 'https://www.amazon.in/dp/B0GM91SD49/ref=lp_27943762031_1_9?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
    { id: 10, title: 'Colour Stones', link: 'https://www.amazon.in/dp/B0GM91SD49/ref=lp_27943762031_1_9?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=ANVSTDSZB1P2392FYSE1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D' },
  ];


  res.status(200).json({ navItems }); 
}
