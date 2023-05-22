'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "2dcdbfab74c3eda881458dc3342a85f6",
"assets/AssetManifest.smcbin": "e75354878dc31eea7022f4af8868e195",
"assets/assets/fonts/LuckiestGuy-Regular.ttf": "79188087ce07615e9fb2c074d8808bdb",
"assets/assets/gift-box.json": "e9cb2ece6783d7b5bdb529d2128be37b",
"assets/assets/images/city/1.png": "bf1e52705d4502f5a3f8f16b902a9541",
"assets/assets/images/city/10.png": "8baa3c0c7890f622924b7f13f947083d",
"assets/assets/images/city/11.png": "5607f6b01031924d15d6776e6d34eb95",
"assets/assets/images/city/12.png": "815a6e6644515c46bc2f5b9753a3cb40",
"assets/assets/images/city/13.png": "739df167b26da16f59ae653988c0d008",
"assets/assets/images/city/14.png": "7d37dceffcdecd4c7276a08b6f968265",
"assets/assets/images/city/15.png": "c874f00a828701079063429681c3effa",
"assets/assets/images/city/16.png": "dcf84bcdc7e3ce3946c853182c3865ec",
"assets/assets/images/city/17.png": "4e1c6f7676290dac44e450a3ce4c63fd",
"assets/assets/images/city/18.png": "1015d36f3e356f0faa9051df5e5d1b57",
"assets/assets/images/city/19.png": "530c06b54bd4df8ac736e64b65e892bb",
"assets/assets/images/city/2.png": "b98e1c8865215882a4a624369c39009f",
"assets/assets/images/city/20.png": "609b98bd61078889282326a652b82fc4",
"assets/assets/images/city/21.png": "5c75067c1d2cdb55a99f4d4a941d9c98",
"assets/assets/images/city/22.png": "111e415cecb2956ea7d745243661613a",
"assets/assets/images/city/23.png": "22a1be947c40df153a868ba6fdae0a60",
"assets/assets/images/city/24.png": "e1ebf3e7849d7dd76e5b65613b12f6a8",
"assets/assets/images/city/25.png": "d91bef3d7cc1c00522109fbc9eb10d4a",
"assets/assets/images/city/26.png": "d43377b308a714f15525d78cf0ad35d4",
"assets/assets/images/city/27.png": "1524730958d68c82a3b399a796909fe6",
"assets/assets/images/city/28.png": "7cc0c22692d367e20b9363ffe690f88a",
"assets/assets/images/city/29.png": "fa637e7c34081d3c1ce326e6ce7d3bba",
"assets/assets/images/city/3.png": "73e904a84338ef304f9f86897699b8a2",
"assets/assets/images/city/30.png": "8c636f8b05d65318384b71d74e15e144",
"assets/assets/images/city/31.png": "e439dd99cceca780a48d0a5e6824c0dd",
"assets/assets/images/city/32.png": "a1da52e0352398e5027ab76373893d9e",
"assets/assets/images/city/33.png": "3976101430eb635de36f9781ae071802",
"assets/assets/images/city/34.png": "553c2dd8b8074e5eb1ce8eeff0aa13cf",
"assets/assets/images/city/35.png": "2e97dd413ec64f3014037870f2b0e7f5",
"assets/assets/images/city/36.png": "bdd1fba1ca900cb1af18bf47d4a1a9f4",
"assets/assets/images/city/37.png": "960073ec1f8e90f73bd5674fdc22248a",
"assets/assets/images/city/38.png": "ddf73f940258d0145dd8ab5be6552694",
"assets/assets/images/city/39.png": "9d1819e97b542325d452e33d24265a4d",
"assets/assets/images/city/4.png": "62cc5c53b49ea5d5b59b64ed575947e6",
"assets/assets/images/city/40.png": "f5715235d863144c026d5bd5d56f0b89",
"assets/assets/images/city/41.png": "37a1693904700f95067d10ac1e629fb1",
"assets/assets/images/city/42.png": "b8fc5e66c3d74bd228622c5e56bce845",
"assets/assets/images/city/43.png": "12e4e42579ab7fbe2c8be60f6a7a9e06",
"assets/assets/images/city/44.png": "efb39b5b65c4e19ab07a03c18b9ce945",
"assets/assets/images/city/45.png": "5f71636661a7ec4fa1cfc1ee2d508866",
"assets/assets/images/city/46.png": "d84b64ace841922923f0ace4c58db938",
"assets/assets/images/city/47.png": "98d8c77a3c05f7988a245d9e62ba40ab",
"assets/assets/images/city/48.png": "7074787df9e39bbf09b1f9e35d24337a",
"assets/assets/images/city/49.png": "2700eba507214d505df23b1eec633834",
"assets/assets/images/city/5.png": "70dcb4f30a8bf2021a069dec25c6bdae",
"assets/assets/images/city/50.png": "e2f64cb38bf6a45bb6fd8101e6f2fae6",
"assets/assets/images/city/51.png": "2cceb018041f0092da494ef2e1c588da",
"assets/assets/images/city/52.png": "94cfaba20e1edcaa4f61bc9e485bbf81",
"assets/assets/images/city/53.png": "c51ac43a57e09c90acaeda386055432d",
"assets/assets/images/city/54.png": "d45824297d6314bb3f27b41711aa2eca",
"assets/assets/images/city/55.png": "7cfcf35f4f0c112b2fa0c8183299b696",
"assets/assets/images/city/56.png": "d69e6acbfbf0373796d694885ef53c98",
"assets/assets/images/city/57.png": "a510f901320791071caf293455fa51b7",
"assets/assets/images/city/58.png": "d0c27deb4aaa46efcaf7969bf5851f3c",
"assets/assets/images/city/59.png": "ebef2e7f4cc152af6306cafd87b8500b",
"assets/assets/images/city/6.png": "4c852a6fcda8a10d00d77c8b8134611a",
"assets/assets/images/city/60.png": "9a322f1bd17f5e0f44def1402e5666b1",
"assets/assets/images/city/61.png": "146167ffbe03f3dc5c28793e9215b79b",
"assets/assets/images/city/62.png": "e79a72b951aadbfb41dfc0393f181489",
"assets/assets/images/city/63.png": "aebb27cf9aeceb5f7ba8c95b62afb03c",
"assets/assets/images/city/64.png": "072ecfcd47a557e8a1f668bffc3491e0",
"assets/assets/images/city/65.png": "eb7498d9041a83ff37c5284119a5bea2",
"assets/assets/images/city/66.png": "fd95815484d3958ae9c4dac1d74070a2",
"assets/assets/images/city/67.png": "fda7adeda7c1d929089de7d47838d8af",
"assets/assets/images/city/68.png": "d5a530dd6427941355f7f134e7ed8973",
"assets/assets/images/city/69.png": "17a2ec4f910693240df5a1391f724a36",
"assets/assets/images/city/7.png": "0ccde826048efffc4f58b317ccb6f386",
"assets/assets/images/city/70.png": "e9830198881da6e6961e41551523cd88",
"assets/assets/images/city/71.png": "9aea9ea71beb7a001e1ab3e5ba82f1bc",
"assets/assets/images/city/72.png": "5261a68d54811f22b4dbf3f3443fcb27",
"assets/assets/images/city/73.png": "6582504d78ac53892d6f8eeb7f987f68",
"assets/assets/images/city/74.png": "5d87390efe5792b699ffe8f78b097d57",
"assets/assets/images/city/75.png": "9f7b977e4f3eb04ebf637815b4f87d0d",
"assets/assets/images/city/76.png": "91ce9e8e9505ac18692c5bf19e2d42ec",
"assets/assets/images/city/77.png": "1ea7e3508293307715aa57cd44d3a479",
"assets/assets/images/city/78.png": "1cd46cc488dc6dedc46acfc7754f45ce",
"assets/assets/images/city/79.png": "d73910bf19a235b59a94eacb1ed3ba52",
"assets/assets/images/city/8.png": "4e64cc3309fce448a7e037bad510cf80",
"assets/assets/images/city/80.png": "785b5203a417bbfc681bd8fbe0cc0d7a",
"assets/assets/images/city/81.png": "5a2c77c4ae4d9615da7bdfa46086961d",
"assets/assets/images/city/82.png": "d97f5f37d820d21a60c67a582a40ad4b",
"assets/assets/images/city/83.png": "5dc4b2528302245efc24492d47b54024",
"assets/assets/images/city/84.png": "69ec97e6842d8c018bff379bd8034a2c",
"assets/assets/images/city/85.png": "dfdfd499c38f7e85089bdb4cbcfa89b0",
"assets/assets/images/city/86.png": "655139cab77a97f46945de4cce848332",
"assets/assets/images/city/87.png": "af69a63545ad464b2ae214ac5b3778f7",
"assets/assets/images/city/88.png": "b5a57d3dfa1604d3545d4fee9753394b",
"assets/assets/images/city/89.png": "ed3eb377c57ebaaad495953aacb0367f",
"assets/assets/images/city/9.png": "11441c39fb1cbdff62d87aadee661f47",
"assets/assets/images/city/90.png": "4dd7f82f97745d154c318aa794834851",
"assets/assets/images/city/91.png": "11190e461d73e25aa2869abd1dc3343d",
"assets/assets/images/city/92.png": "ad30c1309545ecf9dce0b5e126715504",
"assets/assets/images/city/93.png": "40a7fbe1ede34966616d2700133db984",
"assets/assets/images/city/94.png": "91caf1172c8c595f095bd503674d1b65",
"assets/assets/images/city/95.png": "95471ea59bc7af8440dcdb028af090cd",
"assets/assets/images/city/96.png": "762f367d5c558b0e991030dda9bd6a3a",
"assets/assets/images/city/97.png": "ecc32d19f346324c65fe19e66adbcfa0",
"assets/assets/images/city/98.png": "209f49f53037df83f66503e70294cb50",
"assets/assets/images/city/99.png": "097169ebe2e733cc13987165eb870fc9",
"assets/assets/images/city/lock.png": "562b5306a80b5211e339a30842483213",
"assets/assets/images/city/star10.png": "f05248ae5d3911d81c5115c153ad5de1",
"assets/assets/images/city/star11.png": "eed89b3829098cdae375c486dec10bcb",
"assets/assets/images/city/star20.png": "a99259da43231099e7fc403e56164bbb",
"assets/assets/images/city/star21.png": "3db8d346aff7d9e05251171aa2d22278",
"assets/assets/images/city/star22.png": "b7566b96d940d46387981b6c44b1d7e9",
"assets/assets/images/city/star30.png": "7765bdfb9a85485765f96e5b7da9852d",
"assets/assets/images/city/star31.png": "cfec5c8f425dca4e91bd2ff79b63d615",
"assets/assets/images/city/star32.png": "0be08cb73bcbe3239b3ddf5b05e220a2",
"assets/assets/images/city/star33.png": "139c2da59435bf5c7ffb2fdcebb0a087",
"assets/assets/images/continent/1.png": "99dd5ca789538cae1f4cef2cb03f8fcd",
"assets/assets/images/continent/10.png": "729839769f190ab7223706e22e8b6351",
"assets/assets/images/continent/11.png": "3b9a35d1f43d19e9e3bd0aac4afdb3d1",
"assets/assets/images/continent/12.png": "ddad39b4112de082b1c28f29c4201e19",
"assets/assets/images/continent/13.png": "b2b73296e731f6075ae2e279c5236aa9",
"assets/assets/images/continent/14.png": "259bf3da328c1bfabb4e239cd8b68870",
"assets/assets/images/continent/2.png": "36903d3ac627b665301311acfb974f0e",
"assets/assets/images/continent/3.png": "d862f8a8fc3a82ad7186050a13bb399c",
"assets/assets/images/continent/4.png": "a200ee05558a17a9dc2bdf1968cc9a46",
"assets/assets/images/continent/5.png": "14869dfb5b49fc30d41854b7b0612b8d",
"assets/assets/images/continent/6.png": "d666ec815a8296406ba4e437f86ac32f",
"assets/assets/images/continent/7.png": "11c9158123ca84fb3399c3b9346538f1",
"assets/assets/images/continent/8.png": "6dee4a90165b8ef54a99a790a53dc67c",
"assets/assets/images/continent/9.png": "1363d31ae50d526d8e52d41b1e5c2693",
"assets/assets/images/continent/lock.png": "b114d75f8b66938555eef43c1a16d678",
"assets/assets/images/maps/australia.png": "21586befdc9be081d30c7f60b580e63d",
"assets/assets/images/maps/central_america.png": "453f3532b0fa2e3a469f5615ac69f787",
"assets/assets/images/maps/east_asia.png": "190cde964bc03ab2eea48b136738793b",
"assets/assets/images/maps/europe.png": "770965e4336ea430742254cf38c4889e",
"assets/assets/images/maps/level_star.png": "d7a2217b71759638278995ec00ea0e6a",
"assets/assets/images/maps/middle_asia.png": "d2307ce6146d11d74def7d9e8ec985b8",
"assets/assets/images/maps/middle_east.png": "927002c03788e350b32d54e613b5d5a2",
"assets/assets/images/maps/north_africa.png": "e03f272355c28f1401d51eed59ccd4e1",
"assets/assets/images/maps/north_america.png": "4b96d7ed070babd76357d8623cbd1f56",
"assets/assets/images/maps/north_europe.png": "a7ac5a1560b2a97c019d9f0b780eab3a",
"assets/assets/images/maps/siberia.png": "c7721d550b3ce1fe0a47787ff4b8c016",
"assets/assets/images/maps/sid.png": "8380e936668f8f4400ee77ea12c77cef",
"assets/assets/images/maps/southeast_asia.png": "1158d80cb508ae8ee9b221ca0b577cad",
"assets/assets/images/maps/south_africa.png": "5fbf235f4526771d309167f11d00102d",
"assets/assets/images/maps/south_america.png": "200e86ff397c893829ff995561d16921",
"assets/assets/images/maps/south_asia.png": "3dec1071f00aa6bf315d04d7f3100ea3",
"assets/assets/images/maps/south_europe.png": "16b2aa0578a5aa33a684f4cfa49dbab5",
"assets/assets/images/maps/starmenu.png": "b4653eece7cc4b3a185f1cf3b7b2aefc",
"assets/assets/images/maps/world_map.png": "8d2faf9740a8618aaf217609dc2b05f2",
"assets/assets/images/map_menubar/enemyBooster.png": "c0fb8de9faa0a4ec18450f33c650a250",
"assets/assets/images/map_menubar/extralife.png": "30d4f1a44ec98d8a439fc0f1a41b53ed",
"assets/assets/images/map_menubar/heart.png": "2ae85f897069585340122c3ad1c0da92",
"assets/assets/images/map_menubar/scoreBooster.png": "94f32a958abc0a80574c6e554e5efb34",
"assets/assets/images/map_menubar/speedBooster.png": "741e641f99e87af5d1458f2b976d06ef",
"assets/assets/images/map_menubar/toyBooster.png": "b0a870326fd24446d976327e06e7f1da",
"assets/assets/images/running_game/appbar_close.png": "e358818b1e4a1c194edd1956f62bfbb2",
"assets/assets/images/running_game/appbar_pause.png": "cb67334232274106c61f80f143c00fd0",
"assets/assets/images/running_game/appbar_play.png": "519c63e680004eb42ef8cdc1469efbef",
"assets/assets/images/running_game/enemy/barrier1.png": "ecbe62307f31bb399efaabd6c5fca531",
"assets/assets/images/running_game/enemy/barrier2.png": "4391df3d3459b080a427b919598bf7bf",
"assets/assets/images/running_game/enemy/barrier3.png": "8f612ba707d55d5320b007fea7aaedf2",
"assets/assets/images/running_game/mission_done.png": "9b3078ef6b06e517d13d56825c854dc1",
"assets/assets/images/running_game/mission_failed.png": "e5d0eb3145ee6813cae132cda0a88849",
"assets/assets/images/running_game/parallax/city_default.png": "9d512716f016f6ea1b90abf579225da7",
"assets/assets/images/running_game/parallax/cloud_default.png": "a51e9dd9dbd0872fee40db12ef4d6a93",
"assets/assets/images/running_game/parallax/eg2.png": "b494ad8f6dca84463ec7793f66f47b2b",
"assets/assets/images/running_game/parallax/eg_default.png": "2677bfd269892007c7013756748facb0",
"assets/assets/images/running_game/parallax/felho2.png": "f81def62f22caa7a38325b6dd5d923ea",
"assets/assets/images/running_game/parallax/front_default.png": "56d533391c3a8af6c3ba0ce9dad82b2a",
"assets/assets/images/running_game/parallax/korlat2.png": "49e8d9384fb918ad490a0a1e59884cca",
"assets/assets/images/running_game/parallax/opera2.png": "ba7f54a0f0ab0e2d99601db0a8a87ae4",
"assets/assets/images/running_game/parallax/park_default.png": "ea654cd8bd0c05836cbcb090d69d332d",
"assets/assets/images/running_game/parallax/tenger2.png": "881f2b67dc35cc0053014b95924fc527",
"assets/assets/images/running_game/parallax/ut2.png": "55497621fbae56794d5648b9b6ca46bb",
"assets/assets/images/running_game/sidney_hit_spritesheet_test.png": "1ff6b46080bc441213ba02b31edf94c9",
"assets/assets/images/running_game/sidney_run_spritesheet_test.png": "9fb35e02010b1948e0e313e491a5c705",
"assets/assets/images/running_game/toy/ball.png": "7d1126bbf88c38e4efd32d4e79ef3a7a",
"assets/assets/images/running_game/toy/frisbee.png": "93eeca5ec328aba75c4d1dc66bc383e3",
"assets/assets/images/startmenu/ball.png": "7d1126bbf88c38e4efd32d4e79ef3a7a",
"assets/assets/images/startmenu/barrier3.png": "8f612ba707d55d5320b007fea7aaedf2",
"assets/assets/images/startmenu/bonus_bg.png": "dc6ff4e0f32356f60ae49bee7b2e603b",
"assets/assets/images/startmenu/button_bg.png": "3994475e10f6108181f4afcf2940a330",
"assets/assets/images/startmenu/close_icon.png": "aca062164658fedbd038b00ee9ce596f",
"assets/assets/images/startmenu/extra_life.png": "2d7ef5f0055ac366acc7e42df6f52731",
"assets/assets/images/startmenu/frisbee.png": "93eeca5ec328aba75c4d1dc66bc383e3",
"assets/assets/images/startmenu/level_empty_star.png": "c8d37cbcc3596e59503efb9438f4c94a",
"assets/assets/images/startmenu/level_star.png": "ef7584373976dd455d431daa5cb15b51",
"assets/assets/images/startmenu/mission_bg.png": "42f93ac01297cb4ce5087a298c2389dc",
"assets/assets/images/startmenu/mission_done.png": "9b3078ef6b06e517d13d56825c854dc1",
"assets/assets/images/startmenu/mission_failed.png": "e5d0eb3145ee6813cae132cda0a88849",
"assets/assets/images/startmenu/mission_lifeloss.png": "414421f63b6c310d661581afeab9fefc",
"assets/assets/images/startmenu/play_button.png": "7854978f729cf995d9cfeb9fed8f5d82",
"assets/assets/images/startmenu/play_icon.png": "d43a61e25035bad11fb858130e69c7f1",
"assets/assets/images/startmenu/rerun_icon.png": "6441f9749c205804f3b7cb29df6ffc9d",
"assets/assets/images/startmenu/watch_ad.png": "551f0e268613a65000364a7a625b58f9",
"assets/assets/splash.png": "bb66685beed8b6d293d874f062d9cfbf",
"assets/assets/tiles/game_map.json": "cce0d7a368f74a36531370da6c7f403b",
"assets/assets/tiles/game_map.tmx": "ae47267ccbbddd67d4c48bfe16791bbf",
"assets/FontManifest.json": "37cf56f3cb852acff64a6d728c4c0dea",
"assets/fonts/MaterialIcons-Regular.otf": "9edf9ddd48446e32e3f24a917c4bcb8f",
"assets/NOTICES": "c988d4a616025d502b027fe2efd5307a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/canvaskit.wasm": "0d1971e11a8183c2f8043b5e686d4cc4",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "adf6e872ecef974ac963dfbee4f041dc",
"canvaskit/skwasm.js": "9265c6c0cdc6b28cff3e81701d8fd707",
"canvaskit/skwasm.wasm": "db1354e7167ab2d144fbf7cb788bb43d",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "29366e0979fc626c52852ee5a94c3d03",
"/": "29366e0979fc626c52852ee5a94c3d03",
"main.dart.js": "998d838aa4c7b75e13cc2c6a944349d9",
"manifest.json": "4e59eb28f1b0064584c881480261ff6c",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "84cace30ce045b5209036d51af27174b",
"version.json": "78ce4b27913dfa777f2524781f247f26"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
