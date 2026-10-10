export interface SiteAssetPlacement {
  key: string;
  title: string;
  location: string;
  fallbackUrl: string;
}

export const SITE_ASSET_PLACEMENTS: SiteAssetPlacement[] = [
  { key: "home_hero", title: "Home page cover", location: "Home page · opening image", fallbackUrl: "/lovable-uploads/9ecf085a-3abc-45e7-844b-b132bfa85970.png" },
  { key: "header_logo", title: "Header college logo", location: "Top navigation", fallbackUrl: "/lovable-uploads/cae96e5a-5074-4c0c-bf35-1a2e195983a6.png" },
  { key: "footer_logo", title: "Footer college logo", location: "Footer", fallbackUrl: "/lovable-uploads/ad0dcea6-54cc-42ce-85a2-6309e6d3f909.png" },
  { key: "home_profile_1", title: "College profile photo 1", location: "Home page · Our Institution", fallbackUrl: "/lovable-uploads/5810381d-fa14-451a-aba2-1235784bf4f2.png" },
  { key: "home_profile_2", title: "College profile photo 2", location: "Home page · Our Institution", fallbackUrl: "/lovable-uploads/0067500d-84af-4fed-81ce-5a2d974c5d4c.png" },
  { key: "home_profile_3", title: "College profile photo 3", location: "Home page · Our Institution", fallbackUrl: "/lovable-uploads/c4a8eb50-bdf5-432c-88fd-6057229b8e5c.png" },
  { key: "home_profile_4", title: "College profile photo 4", location: "Home page · Our Institution", fallbackUrl: "/lovable-uploads/d925b782-a791-45ef-a813-589b4b49d681.png" },
  { key: "campus_life_1", title: "Campus Life photo 1", location: "Home page · Campus Life", fallbackUrl: "/lovable-uploads/3b749989-4a40-4db5-8bb5-8e893980712d.png" },
  { key: "campus_life_2", title: "Campus Life photo 2", location: "Home page · Campus Life", fallbackUrl: "/lovable-uploads/2b090eee-6ea2-4351-b54e-7fe585598287.png" },
  { key: "campus_life_3", title: "Campus Life photo 3", location: "Home page · Campus Life", fallbackUrl: "/lovable-uploads/0a90514e-cf6b-4174-8901-95a8e4b80570.png" },
  { key: "campus_life_4", title: "Campus Life photo 4", location: "Home page · Campus Life", fallbackUrl: "/lovable-uploads/f59ed751-6fef-466d-be7b-e4e783a26a72.png" },
  { key: "campus_life_5", title: "Campus Life photo 5", location: "Home page · Campus Life", fallbackUrl: "/lovable-uploads/7957b3d5-9719-4d4a-88cc-0c8c1687f05a.png" },
  { key: "campus_life_6", title: "Campus Life photo 6", location: "Home page · Campus Life", fallbackUrl: "/lovable-uploads/745eb78f-cad2-4f2e-bb77-acb0acd7f1c5.png" },
  { key: "heritage_1", title: "Heritage photo 1", location: "Home page · Our Heritage", fallbackUrl: "/lovable-uploads/003761c8-21ea-431f-b686-daaa89289a77.png" },
  { key: "heritage_2", title: "Heritage photo 2", location: "Home page · Our Heritage", fallbackUrl: "/lovable-uploads/7a24c2ce-e1fa-4e29-9298-994587287b76.png" },
  { key: "heritage_3", title: "Heritage photo 3", location: "Home page · Our Heritage", fallbackUrl: "/lovable-uploads/106dbe77-c38e-40f8-a8ff-e4ef8bf83d80.png" },
  { key: "heritage_4", title: "Heritage photo 4", location: "Home page · Our Heritage", fallbackUrl: "/lovable-uploads/22d1b775-7f93-42dd-b3d9-3de870ca21e3.png" },
  { key: "heritage_5", title: "Heritage photo 5", location: "Home page · Our Heritage", fallbackUrl: "/lovable-uploads/bcf46b8d-3b9a-4d4c-9141-60084c7ccb4e.png" },
  { key: "heritage_6", title: "Heritage photo 6", location: "Home page · Our Heritage", fallbackUrl: "/lovable-uploads/5d1d1740-7329-4875-84f6-c30f1ccc1f3b.png" },
  { key: "welcome_photo", title: "Welcome section photo", location: "Home page · Welcome", fallbackUrl: "/lovable-uploads/f3d6ede9-846e-473c-a7f7-c8e948334e8a.png" },
  { key: "correspondent_photo", title: "Correspondent portrait", location: "Home page · Correspondent message", fallbackUrl: "/lovable-uploads/a0a7a9b0-8d22-4053-abae-e1e8d00b0492.png" },
  { key: "vice_president_photo", title: "Vice-President portrait", location: "Home page · Vice-President message", fallbackUrl: "/lovable-uploads/69a5e469-616f-4fe5-9e58-87c598505f45.png" },
  { key: "research_highlight_photo", title: "Research feature photo", location: "Home page · Research highlights", fallbackUrl: "/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png" },
  { key: "admission_hero", title: "Admission page cover", location: "Admission page · opening image", fallbackUrl: "/lovable-uploads/bf17da84-634b-4ca1-b09f-996816eb4e61.png" },
  { key: "departments_hero", title: "Departments page cover", location: "Departments page · opening image", fallbackUrl: "/lovable-uploads/ad1edf50-6e71-4375-91d2-7e8d76b3b7b5.png" },
  { key: "naac_logo", title: "NAAC accreditation mark", location: "About page · accreditation", fallbackUrl: "/lovable-uploads/f7ffbe1f-5fed-4b97-9af1-ab0ad2725f32.png" },
  { key: "nba_logo", title: "NBA accreditation mark", location: "About page · accreditation", fallbackUrl: "/lovable-uploads/d23b165a-50de-4010-841f-59049ee5cf3d.png" },
  { key: "ugc_logo", title: "UGC recognition mark", location: "About page · accreditation", fallbackUrl: "/lovable-uploads/fa6cd0f0-bbb2-4bf5-bc81-323b4085c47e.png" },
];