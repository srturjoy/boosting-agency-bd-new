// Permanent Fallback and Synchronization Registry for Real Campaign Screenshots
// This ensures all 44 Meta Ads Manager campaign screenshots are permanently preserved
// and always accessible across local static exports, Cloudflare Pages, and production domains.

export const GITHUB_CAMPAIGN_MEDIA_BASE =
  "https://raw.githubusercontent.com/srturjoy/boosting-agency-bd-new/main/.aistudio/artifacts/brain/f1d49a8d-c516-4a7f-8e63-81b182330436/.tempmediaStorage"

export const CAMPAIGN_MEDIA_BACKUP_MAP: Record<string, string> = {
  // Message & Lead Generation Campaigns (24 Screenshots)
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_469059355_122130042656514031_369102855538254387_n_jpg_63750.jpg":
    "media_1792756948114_b705ba0a.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_514027894_122175761390514031_1004080647476241184_n_jpg_34292.jpg":
    "media_1792756948804_f0bd945b.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_516531500_122177199812514031_6905019251829299086_n_jpg_141864.jpg":
    "media_1792756951676_913add9a.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_517278887_122177854142514031_8042573549680543604_n_jpg_128733.jpg":
    "media_1792756952920_b201c5a4.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_518354575_122179825526514031_8241287023402131388_n_jpg_116660.jpg":
    "media_1792756953906_95bc36b3.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_591629386_122206722914514031_214039811972614365_n_jpg_64836.jpg":
    "media_1792756954681_d2dc0636.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_592258780_122206723376514031_949721135675756771_n_jpg_73978.jpg":
    "media_1792756959953_01527cbc.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_592261293_122206722236514031_4358856224825328988_n_jpg_64830.jpg":
    "media_1792756959682_50cc8c3e.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_599962407_122209675322514031_7704999519092585729_n_jpg_96553.jpg":
    "media_1792756979940_b032c924.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_600416344_122209675166514031_1986049422276954564_n_jpg_97395.jpg":
    "media_1792756981147_9c85bb77.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_600664670_122209832786514031_2278875621983301162_n_jpg_92230.jpg":
    "media_1792757002615_fcc96c9f.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_602334305_122209832576514031_3361030893700368438_n_jpg_131719.jpg":
    "media_1792756983142_047256c9.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_603012010_122210986682514031_7572243519308252920_n_jpg_129167.jpg":
    "media_1792756984305_82deff97.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_603787489_122210986730514031_6014978866424503527_n_jpg_137529.jpg":
    "media_1792756985192_0dd3a946.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_603849026_122210986592514031_5792985738735537371_n_jpg_118072.jpg":
    "media_1792756986421_222da559.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_604618064_122210986904514031_3110132742273449186_n_jpg_94489.jpg":
    "media_1792756987266_8b5bc60f.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_605473441_122210986550514031_4176941776262603287_n_jpg_129121.jpg":
    "media_1792757001634_9c0f0793.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_605708655_122210986862514031_2726238510088191091_n_jpg_92230.jpg":
    "media_1792757002615_fcc96c9f.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_606389664_122210986634514031_6570477245486508953_n_jpg_126250.jpg":
    "media_1792757005204_cef8b1a2.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_625371417_122216943386514031_6641575878736972195_n_jpg_63833.jpg":
    "media_1792757006078_0c5a0253.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_626030571_122216943278514031_4092817830625850002_n_jpg_66879.jpg":
    "media_1792757006978_ab8adf4e.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_627189227_122216943248514031_8284434465264696406_n_jpg_67201.jpg":
    "media_1792757008011_27477ab9.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_628053711_122216943314514031_4860961609898335480_n_jpg_64125.jpg":
    "media_1792757009103_7902984f.jpg",
  "/images/campaigns/message-lead-campaigns/message-lead-campaigns_628189254_122216943344514031_827828437086750959_n_jpg_64300.jpg":
    "media_1792757010372_ef6c7334.jpg",

  // Website Purchase & Conversion Campaigns (20 Screenshots)
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_650757177_122222877572514031_7591552409511033891_n_jpg_123754.jpg":
    "media_1792757038484_c8e2dc51.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_656818636_122224696070514031_3280436921714703977_n_jpg_92548.jpg":
    "media_1792757039459_b7f54aa0.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_657293649_122224698050514031_3224995908435152501_n_jpg_43694.jpg":
    "media_1792757040341_5100e821.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_657333974_122224696808514031_1817429351967677198_n_jpg_53000.jpg":
    "media_1792757042158_84d8030e.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_657391903_122224697672514031_8715767215055026999_n__1__jpg_6774.jpg":
    "media_1792757045467_206ddf1e.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_657391903_122224697672514031_8715767215055026999_n_jpg_67748.jpg":
    "media_1792757045467_206ddf1e.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_658445757_122224698416514031_7438331536548449762_n_jpg_64239.jpg":
    "media_1792757044293_34726321.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_703896729_122232124814514031_2008624678293446595_n_jpg_93322.jpg":
    "media_1792757046509_4d896b37.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_705238146_122232125144514031_2742035857755383947_n_jpg_97895.jpg":
    "media_1792757046454_ccd018ab.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_747334073_1488332569733528_9141966056937279092_n_jpg_151518.jpg":
    "media_1792757047773_1ccf2229.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_748597799_28020160680921890_7813687782749355665_n_jpg_68978.jpg":
    "media_1792757070521_ee43b433.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_748829606_3186493041543045_2122049881093404436_n_jpg_83567.jpg":
    "media_1792757071657_5d24bcee.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_748969736_1370757955014127_8930111228125870161_n_jpg_50324.jpg":
    "media_1792757072429_4caa18db.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_749132986_2415265302332227_4783399223205638241_n_jpg_130423.jpg":
    "media_1792757073770_d2e45b15.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_749197955_1065357709779922_1570792922458747889_n_jpg_67482.jpg":
    "media_1792757082708_9864ae83.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_749315025_2076533886271372_2353768655858490844_n_jpg_63318.jpg":
    "media_1792757077474_50af3b30.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_749329689_1679237933373742_8510395576206573493_n_jpg_61882.jpg":
    "media_1792757078469_83fb314c.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_750020724_3536172703224686_8682389938618938520_n_jpg_78497.jpg":
    "media_1792757079475_699fa422.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_751021704_2392641221259354_2647093322391690081_n_jpg_68327.jpg":
    "media_1792757089395_05362ef8.jpg",
  "/images/campaigns/website-purchase-campaigns/website-purchase-campaigns_842143274_1442158361193580_3784843313342543215_n_jpg_98398.jpg":
    "media_1792757085975_003b09a9.jpg",
}

/**
 * Returns the permanent backup URL for any campaign screenshot if local static path fails to load.
 */
export function getCampaignBackupUrl(localUrl: string): string {
  const filename = CAMPAIGN_MEDIA_BACKUP_MAP[localUrl]
  if (filename) {
    return `${GITHUB_CAMPAIGN_MEDIA_BASE}/${filename}`
  }
  return localUrl
}
