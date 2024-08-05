const threshold = [ // 動画IDと年の対応
  1918731, // 2008最初
  5716612, // 2009最初
  9260335, // 2010最初
  13182647, // 2011最初
  16577790, // 2012最初
  19730130, // 2013最初
  22584207, // 2014最初
  25250098, // 2015最初
  27916406, // 2016最初
  30344277, // 2017最初
  32516487, // 2018最初
  34410290, // 2019最初
  36161858+1, // 2020最初
];
const tag_saino = [ // [才能の無駄遣い]タグ 
  13223765, 2961684, 7260122, 20191327, 593320, 1298108, 4546510, 2374033, 449294, 1976713, 34174209, 18573687, 8758277, 1736627, 28474257, 1451281, 1429843, 20419985, 17739075, 1811817, 2976886, 28457455, 3003938, 38069063, 23919138, 24203022, 7792908, 8755907, 8329468, 3090855, 8323751, 8019494, 10813948, 15538939, 3571422, 5147516, 20109697, 22607555, 25737844, 27508966, 1774986, 9399546, 8191677, 6936905, 2066661, 6047793, 21642119, 19532504, 25164930, 9874251, 30115157, 9270610, 32826836, 34038830, 21710100, 12016359, 620051, 2272525, 1301151, 3525651, 917658, 391469, 505197, 7505191, 19237717, 2174265, 7545065, 1074425, 3044455, 863619, 8130451, 15239646, 25776331, 1596458, 5772419, 3260426, 4919050, 23432803, 23083854, 26928404, 18828194, 22992532, 26639245, 17349570, 20895799, 41878696, 2954411, 7637886, 17236328, 2881662, 18224077, 19201821, 24905056, 15386580, 1107365, 20661688, 17422168, 9871942, 1744430, 7948588, 7808519, 10338946, 15111069, 13137618, 27005016, 17416068, 13356611, 17422096, 4236946, 29266734, 7772545, 7482270, 7243132, 9158851, 13921404, 29424493, 8074060, 18566324, 16259051, 21248335, 32395695, 4360326, 21979616, 18540568, 17172543, 18414484, 6913044, 3698809, 607378, 7538365, 1760545, 12675530, 2566810, 4915477, 3505339, 28807122, 14457330, 772668, 20119515, 20489884, 20655129, 28202116, 10399330, 23093836, 213588, 7187619, 13686482, 1658970, 37350386, 12319337, 11239871, 5167577, 2294085, 20138818, 16139820, 29555862, 996694, 9876024, 14028009, 30167694, 6960617, 10154944, 3813948, 17320748, 16154368, 18467285, 14766182, 13479176, 15770560, 9723455, 30543284, 37872828, 16171810, 15091491, 24298374, 20822400, 23212281, 4150077, 30614618, 6356807, 39277950, 671243, 1719789, 8771284, 4637500, 1935151, 1053633, 5843820, 18972251, 41584112, 34014717, 19975392, 12694683, 11598176, 8181358, 18635699, 13731402, 8391850, 5877115, 5502385, 33769132, 21082052, 29835114, 30184375, 26589284, 19171271, 20675509, 7637978, 2843046, 2031682, 4339475, 7539695, 21961435, 14378844, 11479863, 16511916, 16053950, 15605644, 27944652, 18525994, 13581709, 9540085, 15419951, 13214917, 26344017, 17416017, 35389672, 38687293, 42228749, 26465586, 4598328, 20108162, 31738129, 11079652, 4903091, 14677420, 30512012, 23386479, 29099819, 26604339, 25615018, 1508217, 34864054, 10799344, 13387747, 16282908, 8741452, 5053697, 12011549, 17046374, 31248778, 19332411, 37958458, 30022810, 9015950, 38491233, 6006083, 22408511, 24986125, 2100523, 2120007, 14046808, 20912090, 18335017, 18905032, 7504211, 7381817, 30654090, 21475978, 19722119, 20503578, 34626382, 2764096, 11429725, 34070960, 7319309, 30703464, 116428, 186844, 32064891, 4039967, 24617108, 6936306, 3536008, 4487607, 344930, 3890365, 5930983, 5281165, 2175430, 34927794, 8007064, 961919, 1212343, 18821089, 649572, 1663298, 13940774, 14980750, 27726560, 26598782, 17241811, 35869354, 9102125, 9087167, 9847113, 312923, 47518, 43725507, 8525716, 5647284, 19963326, 7602282, 1654593, 20626325, 266951, 28303032, 318439, 513641, 25373458, 2018023, 13907613, 11738154, 2569489, 416093, 360038, 1650173, 1207625, 21657497, 2765902, 39488440, 9566611, 22455164, 16393402, 7469469, 23625684, 6857137, 14014751, 2870744, 15470077, 847427, 390059, 15374585, 12444815, 19592993, 25805360, 36377172, 6077862, 1049615, 2291247, 18314623, 23942087, 53258, 53281, 765497, 155826, 2119649, 1411674, 17221756, 10233058, 16500670, 12232479, 979939, 5780, 8187718, 35411360, 667893, 324900, 678965, 5623069, 3676723, 3865352,
];
const tag_jinrui = [ // 人類には早すぎる動画 
  2694348, 1022235, 6793193, 14411363, 20184341, 6163743, 7232278, 26316369, 43305065, 10383892, 8950980, 15354350, 9949815, 1816841, 18294421, 30587834, 41214912, 30978056, 28722747, 8650255, 9356974, 41349334, 23875167, 2019707, 9692900, 23639171, 15434758, 1046244, 25354849, 30072186, 23795351, 16686731, 16995161, 15859721, 20184521, 32395695, 11844420, 2260920, 28027625, 37301412, 1914063, 14131717, 28098726, 8769834, 5296874, 18772997, 11586166, 30325941, 14131153, 27463629, 21054028, 6855970, 2031875, 1342029, 1429174, 27505663, 37137316, 9105993, 6912608, 21418173, 22067611, 16923372, 14975990, 30691525, 21057377, 19045684, 2175149, 36734200, 5295372, 25700778, 27030660, 34072633, 34081779, 23906786, 22672929, 20647766, 7011356, 22875493, 1015310, 2697175, 7344637, 248600, 17758675, 19888799, 29963714, 24881752, 15807528, 25297253, 11533355, 11024837, 1760890, 5593290, 11453044, 8400905, 22646143, 13427990, 16009206, 3215981, 4673929, 4224036, 17520107, 25644188, 12858584, 6653344, 3680050, 4343292, 12640547, 17044903, 19532644, 21080692, 29789410, 11064754, 10100231, 9947317, 4685055, 20001957, 23042994, 23660690, 20218698, 12929539, 14834297, 14966444, 14691575, 30783434, 31577752, 11335452, 32869323, 18427267, 25782197, 5721428, 10723077, 14705768, 23703581, 13894323, 339529, 8508923, 6665895, 9198957, 12496464, 10177642, 33480786, 36681676, 37294501, 43867500, 4033748, 21925598, 7862415, 18392424, 18107604, 31750056, 30040503, 7459819, 39102980, 30392094, 11659781, 34493736, 5936821, 20091789, 12079626, 16288415, 19021341, 19459989, 40072155, 27533481, 30815111, 19736194, 19370588, 22270457, 24920814, 8245613, 9931828, 28071018, 27034889, 6824702, 29079997, 9990169, 15517737, 15850357, 15958601, 31556707, 8577413, 39333193, 23291190, 32335309, 33433228, 32324833, 20693201, 32000111, 7834286, 2912532, 41859957, 5101755, 5480865, 7698760, 14440099, 2010050, 28068541, 12307887, 30671283, 17151955, 25161104, 12850764, 12936888, 12984729, 13055441, 13239166, 22982311, 13969226, 15110390, 17227329, 17307148, 17602791, 20641250, 24774222, 30677756, 31588303, 30900131, 30792640, 31299990, 30921906, 30619865, 33472554, 18973503, 5965886, 19645586, 33724681, 31337750, 34736076, 31089478, 15283208, 19934087, 5044315, 16179528, 19176324, 27473641, 33025349, 5556050, 25013585, 13443224, 31120472, 25355249, 25237408, 5865653, 27379952, 17781561, 34895418, 1642964, 25493674, 34470065, 30972136, 4292220, 21030379, 20641604, 21439635, 20617205, 21003353, 13056705, 17313116, 3841792, 24865747, 16844522, 30955937, 17490502, 41454326, 15002804, 15241575, 6214866, 4462136, 14160349, 19172492, 6052153, 22287397, 1156952, 41599546, 32169984, 14362, 141877, 24833524, 9354432, 17336486, 10791868, 1373051, 28497015, 14670778, 18784306, 26183311, 6112057, 12437294, 18838558, 20328346, 28579886, 17290692, 18273950, 1287899, 2358343, 7876747, 7962528, 8249195, 22782315, 35029658, 28022575, 1925615, 21288043, 5445419, 13385345, 7241531, 7330209, 4917369, 15174318, 6215380, 33907507, 7450576, 24680935, 19506913, 1733757, 24636193, 21931743, 930541, 5012746, 3467537, 27866408, 35728979, 28284990, 2220750, 20104597, 18580379, 22250337, 35399378, 22157215, 22158467, 4068171, 8033368, 10715964, 10739536, 19050590, 24837483, 25964087, 31357905, 40651661, 3698809, 10428341, 747302, 16947203, 25673570, 10595915, 30830796, 9050261, 19209170, 2457500, 38400293, 8313641, 11240441, 11660316, 36864467, 20184341, 17606239, 15497544, 16883231, 41373906, 24961333, 37121985, 10939115, 30045778, 1628339, 10140234, 11930294, 13270926, 17431300, 32842177, 32984364, 33262492, 35187931, 35288997, 36363729, 37628835, 37817603, 37967453, 38744032, 39329518, 39582253, 40859590, 40868760, 40878543, 16877776, 29629228, 1369451, 12811697, 17134174, 43532247, 38507291, 41446987, 427208, 25907889, 38749164, 8086546, 28641900, 5860697, 40480852, 36536305, 33716500, 24564616, 38144783, 40196682, 8660066, 40582676, 18239997, 35068900, 39880646, 13716657, 4150077, 28205545, 36622951, 41872564, 22408670, 32266815, 8866666, 13651173, 37338918, 38234419, 14331968, 18798851, 18882761, 34958073, 11855782, 14187096, 17764409, 13013651, 37360191, 40422279, 12043464, 41556382, 42170720, 42742783, 27145126, 37990347, 28927611, 39283023, 31065119, 14893675, 13025435, 40121204, 25446298, 22103439, 38978523, 24558332, 27734340, 43528055, 42610463, 16757279, 30680703, 37915943, 42058906, 34843535, 41063891, 41029264, 29388738, 15838346, 13346516, 20541727, 29337528, 34864113, 35024637, 37690554, 38875863, 39626035, 40984507, 41511495, 9852608, 38809533, 38634501, 40630954, 35813980, 7620397, 41421378, 2151069, 3285687, 394914, 11632846, 13682131, 13735778, 20662510, 21253950, 23681517, 25279886, 27791485, 30561040, 32168518, 32929668, 41507367, 42770725, 3992036, 1268556, 29911715, 5307559, 21995368, 23436317, 38036895, 42212464, 43398053, 21290003, 21652749, 36852303, 2788686, 19600177, 29184138, 4891900, 21722525, 25932720, 21510669, 13765270, 23915671, 14587037, 31719901, 19225131, 29802, 10707477, 20233607, 6775120, 13629911, 13877880, 25716738, 16499796, 2597153, 32479230, 9963318, 6875397, 39699360, 3332949, 2343631, 20268353, 13976080, 38855267, 41374593, 21824685, 6512437, 17457369, 21842052, 35623636, 40649355, 30239312, 12190106, 25134783, 9479590, 30897951, 37337357, 34557622, 24689872, 18943033, 38021102, 13640048, 28234976, 38765191, 27508966, 22782852, 21389091, 13867989, 31712030, 39379425, 31031402, 31617057, 18866956, 1101316, 32288734, 3800247, 2220693, 9384664, 7477966, 16441728, 19767097, 10509886, 2448043, 5387551, 775033, 31693013, 18348540, 13421413, 19107709, 17477481, 15245362, 284908, 9042209, 15760582, 23318145, 23028230, 19176574, 23024849, 14930748, 23308792, 9831420, 39013147, 1019557, 18800216, 11065381, 42637506, 15444885, 26060682, 7930725, 7643517, 12520424, 12743369, 22267531, 33753334, 5561975, 24774139, 16281317, 8747847, 36516465, 28667020, 25198641, 9433077, 27510328, 16978142, 20141939, 20655364, 22841647, 28037185, 31048933, 35447220, 40668981, 18378808, 38557851, 37831624, 21615745, 32712099, 13659756, 26590444, 24176692, 9505904, 26925299, 18649391, 37975829, 38277266, 34267377, 21356701, 33532510, 38102219, 25579944, 6403649, 31212669, 22503361, 10717925, 9104010, 9418527, 9717350, 10029795, 12749499, 13005200, 13906824, 14461250, 14723323, 19595633, 27924884, 32543494, 27145033, 1946617, 10271788, 12426559, 15100584, 20124711, 26725843, 27158518, 28944718, 37308978, 40462952, 42621331, 35391325, 24600041, 4419521, 16846819, 8557821, 40583771, 6007567, 3813561, 14060426, 28914787, 19380786, 27811709, 1153127, 7010505, 6758672, 33293184, 34884635, 31694872, 767842, 35101283, 31544416, 29480377, 30350123, 40534295, 8529796, 10219184, 15468314, 22623910, 40717070, 19375087, 27433624, 23614974, 37396542, 31024678, 16039225, 13199029, 13423292, 18609402, 1061593, 16674461, 19000650, 11992818, 10816190, 18159327, 18842919, 21131763, 10183064, 11327362, 26471271, 35388652, 4428349, 40546722, 39377574, 14556240, 10595032, 36860410, 1745852, 38815076, 15250140, 13656100, 12631740, 7873865, 30415243, 2155271, 2385334, 17429946, 24537483, 26534273, 28935307, 29231475, 30353967, 31418993, 36815461, 39986725, 1880099, 21972021, 11474829, 30399768, 2438317, 35096962, 14773511, 5242519, 11885348, 18847452, 40009119, 20952031, 2021271, 34956960, 19128865, 4043845, 3967829, 35841925, 38292711, 31366507, 1297356, 11595984, 10261137, 4538466, 20723418, 28263663, 41825059, 35180550, 13353807, 5130255, 4059050, 22890981, 10805558, 16497152, 11940641, 19148615, 23972852, 36729582, 35250376, 2485819, 18808089, 5830611, 9456236, 20634373, 3990078, 26313394, 31195535, 36723305, 10017658, 38140651, 34299297, 15008820, 29325793, 10027154, 16756447, 40338470, 16565587, 30317688, 23233444,
];
document.addEventListener('DOMContentLoaded', function () {
  const historyList = document.getElementById('history-list');

  chrome.history.search({ text: 'https://www.nicovideo.jp/watch_tmp/', maxResults: 10000, startTime: 0 }, function (data) {
    data.forEach(function (page) {
      const listItem = document.createElement('li');
      const id = page.url.replace("https://www.nicovideo.jp/watch_tmp/", ''); // id='smXXXX'
      const idNumber = id.substring(2); // 数字部分
      const lastVisitTime = new Date(page.lastVisitTime);

      listItem.setAttribute('id', id);
      listItem.setAttribute('number', idNumber);
      listItem.setAttribute('lastVisitTime', lastVisitTime.getTime()); // 最終アクセス時刻

      // 何年の動画かをチェック
      let year = 2007 + threshold.length;
      for (let i = 0; i < threshold.length; i++) {
        if (idNumber < threshold[i]) {
          year = 2007 + i;
          break;
        }
      }
      listItem.setAttribute('year', year);

      // タグ(タグ名ごとに 'true' か 'false' が入る)
      listItem.setAttribute('tag_saino', (tag_saino.includes(parseInt(idNumber)))); // 才能の無駄遣い
      listItem.setAttribute('tag_jinrui', (tag_jinrui.includes(parseInt(idNumber)))); // 人類には早すぎる動画 


      // 表示部分
      //const icon = document.createElement('img');
      //icon.src = "icon/nicovideo.png"
      //listItem.appendChild(icon);

      /*
      const title = document.createElement('span');
      title.textContent = (page.title || page.url).replace(/ - ニコニコ動画$/,'').replace(/^ニコニコ動画（Re:仮）$/,'※（Re:仮）で開けなかった動画');
      listItem.appendChild(title);
      */

      const link_org = document.createElement('a');
      link_org.classList.add('title')
      link_org.href = page.url.replace(/watch_tmp/, 'watch'); // （Re:仮）のURLから復旧後のURLに変換
      link_org.target = '_blank';
      if (page.title) {
        link_org.textContent = (page.title || page.url).replace(/ - ニコニコ動画$/, '').replace(/^ニコニコ動画（Re:仮）$/, '※（Re:仮）で開けなかった動画');
      }
      listItem.appendChild(link_org);


      /*
            const link_re = document.createElement('a');
            link_re.href = page.url;
            link_re.textContent = "開く(Re:仮)";
            link_re.target = '_blank';
            listItem.appendChild(link_re);
      */

      listItem.title = link_org.textContent + " " + lastVisitTime.toLocaleDateString() + " " + lastVisitTime.toLocaleTimeString();
      historyList.appendChild(listItem);
    });
  });
});

// フィルタ
function doFilter() {
  const filterValue = document.getElementById('filter-input').value.toLowerCase(); // タイトルで検索

  const filterGenre = document.getElementById('genre').value; // ジャンルで検索
  const filterYear = parseInt(filterGenre);
  const filterTag = (isNaN(filterYear) ? filterGenre : "");

  const listItems = document.querySelectorAll('#history-list li a.title');

  listItems.forEach(function (item) {
    if (item.textContent.toLowerCase().includes(filterValue)) { // タイトルで検索
      item.parentElement.classList.remove('hidden');
    } else {
      item.parentElement.classList.add('hidden');
    }
    if (!isNaN(filterYear)) { // 年でフィルタ
      if (item.parentElement.getAttribute('year') != filterYear) {
        item.parentElement.classList.add('hidden');
      }
    } else if (filterTag) { // タグでフィルタ
      if (item.parentElement.getAttribute(filterTag) == 'false') {
        item.parentElement.classList.add('hidden');
      }
    }
  });
}

document.getElementById('filter-input').addEventListener('input', doFilter);
document.getElementById('genre').addEventListener('change', doFilter);

document.getElementById('clear-button').addEventListener('click', function () {
  document.getElementById('filter-input').value = '';
  doFilter();
});

// ソート
document.getElementById('sort').addEventListener('change', function () {
  const option = this.value.split(' '); // "id desc" など、"要素 ソート順" 表記
  const order = option[0];
  const asc = ((option[1] == 'asc') ? 1 : -1);
  const list = document.getElementById('history-list');
  const items = Array.from(list.getElementsByTagName('li'));

  items.sort((a, b) => {
    const numberA = parseFloat(a.getAttribute(order));
    const numberB = parseFloat(b.getAttribute(order));

    return (numberA - numberB) * asc;
  });

  // ソートされたアイテムをULに再挿入する
  items.forEach(item => list.appendChild(item));
});