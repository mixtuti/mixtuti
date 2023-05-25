// アップグレード部分のJavaScriptコード
const upgradeButtons = document.querySelectorAll(".upgrade-part");
const cookieCountElement = document.getElementById("clickCount");
let currentCookieCount = 0;
let upgrades = [
  {
    name: "アップグレード1",
    cost: 10,
    count: 0
  },
  {
    name: "アップグレード2",
    cost: 200,
    count: 0
    },
  {
    name: "アップグレード3",
    cost: 1000,
    count: 0
    },
  {
    name: "アップグレード4",
    cost: 10000,
    count: 0
    },
  {
    name: "アップグレード5",
    cost: 50000,
    count: 0
    },
  {
    name: "アップグレード6",
    cost: 100000,
    count: 0
  },
  // 他のアップグレードの情報も追加
];

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// サウンドのプリロード
const clickSound = new Audio('click-sound.mp3');
const buySound = new Audio('buy-sound.mp3');
const sellSound = new Audio('sell-sound.mp3');

// サウンド再生の共通関数
function playSound(sound) {
  sound.currentTime = 0;  // サウンドの再生位置をリセット
  sound.play();
}

// にゃんこクリックイベントリスナー
cookie.addEventListener("click", function() {
  currentCookieCount++;
  clickCount.textContent = currentCookieCount + " にゃんこ";
  playSound(clickSound);  // クリック音を再生
});

// アップグレードボタンにクリックイベントリスナーを追加
upgradeButtons.forEach(function(button, index) {
  const upgradeCountElement = button.querySelector(".upgrade-count");
  const buyButton = button.querySelector(".buy-button");
  const sellButton = button.querySelector(".sell-button");
  const upgradeCostElement = button.querySelector(".upgrade-cost");
  let upgradeCost = parseInt(upgradeCostElement.textContent.split(":")[1]);
  let upgradeCount = 0;
  let intervalId; // アップグレード1のインターバルIDを保持する変数
  let originalUpgradeCost = upgradeCost; // 初期コストを保存する変数

  function upgrade1Effect() {
    intervalId = setInterval(function() {
      currentCookieCount++;
      cookieCountElement.textContent = currentCookieCount + " にゃんこ";
    }, 1000);
  }

  buyButton.addEventListener("click", function () {
    if (currentCookieCount >= upgradeCost) {
      currentCookieCount -= upgradeCost;
      cookieCountElement.textContent = currentCookieCount + " にゃんこ";
      upgradeCount++;
      upgradeCountElement.textContent = "所持数: " + upgradeCount;

      console.log("購入しました！現在のにゃんこ数: " + currentCookieCount);
      playSound(buySound);  // 購入時のクリック音を再生
      applyUpgradeEffect(index); // indexを渡す

      // 所持数が一定を超えた場合、コストを増加させる
      if (upgradeCount >= 5) {
        upgradeCost *= 2; // コストを2倍に増やす
        upgradeCostElement.textContent = "コスト: " + upgradeCost; // コストを更新
        clearInterval(intervalId); // アップグレード1のインターバルをクリア
      }
    } else {
      const remainingCookies = upgradeCost - currentCookieCount;
      console.log("にゃんこが足りません！ 必要なにゃんこ: " + remainingCookies + " 現在のにゃんこ数: " + currentCookieCount);
      alert("にゃんこが足りません！ 必要なにゃんこ: " + remainingCookies + " 現在のにゃんこ数: " + currentCookieCount);
    }
  });

  sellButton.addEventListener("click", function () {
    if (upgradeCount > 0) {
      upgradeCount--;
      currentCookieCount += upgradeCost;
      cookieCountElement.textContent = currentCookieCount + " にゃんこ";
      upgradeCountElement.textContent = "所持数: " + upgradeCount;

      // 所持数が一定以下になった場合、コストを減少させる
      if (upgradeCount < 5 && upgradeCost > originalUpgradeCost) {
        upgradeCost = Math.floor(upgradeCost / 2); // コストを半分に減らす
        upgradeCostElement.textContent = "コスト: " + upgradeCost; // コストを更新
        upgrade1Effect(); // アップグレード1の効果を再度適用
      }

      console.log("売却しました！現在のにゃんこ数: " + currentCookieCount);
      playSound(sellSound);  // 売却時のクリック音を再生
    }
  });
});

// アップグレードの効果を適用する関数
function applyUpgradeEffect(index) {
    // アップグレードごとの効果を定義し適用するロジックを記述
    if (index === 0) {
        // アップグレード1の効果を適用
        upgrade1Effect();
    } else if (index === 1) {
        // アップグレード2の効果を適用
        upgrade2Effect();
    } else if (index === 2) {
        // アップグレード3の効果を適用
        upgrade3Effect();
    }
    else if (index === 3) {
        // アップグレード4の効果を適用
        upgrade4Effect();
    }
    else if (index === 4) {
        // アップグレード5の効果を適用
        upgrade5Effect();
    }
    else if (index === 5) {
        // アップグレード6の効果を適用
        upgrade6Effect();
    }
}

function upgrade1Effect() {
  setInterval(function() {
    currentCookieCount++;
    playSound(clickSound);  // クリック音を再生
    cookieCountElement.textContent = currentCookieCount + " にゃんこ";
  }, 1000);
}

function upgrade2Effect() {
  cookie.addEventListener("click", function() {
    currentCookieCount += 2;
    cookieCountElement.textContent = currentCookieCount + " にゃんこ";
  });
}

function upgrade3Effect() {
  setInterval(function() {
    currentCookieCount++;
    playSound(clickSound);  // クリック音を再生
    cookieCountElement.textContent = currentCookieCount + " にゃんこ";
  }, 100);
}

function upgrade4Effect() {
  cookie.addEventListener("click", function() {
    currentCookieCount += 5;
    cookieCountElement.textContent = currentCookieCount + " にゃんこ";
  });
}

function upgrade5Effect() {
    setInterval(function() {
      currentCookieCount++;
      playSound(clickSound);  // クリック音を再生
    cookieCountElement.textContent = currentCookieCount + " にゃんこ";
  }, 5);
}

function upgrade6Effect() {
    cookie.addEventListener("click", function() {
    currentCookieCount *= 2;
    cookieCountElement.textContent = currentCookieCount + " にゃんこ";
  });
}

function updateUpgradeCost() {
    const upgradeCostElement = button.querySelector(".upgrade-cost");
    upgradeCostElement.textContent = "コスト: " + newUpgradeCost;

    // upgrades配列の対応するアップグレードのコストも更新する
    const index = parseInt(button.dataset.index);
    upgrades[index].cost = newUpgradeCost;
}

const upgradeInfoElements = document.querySelectorAll(".upgrade-info-text");

upgradeInfoElements.forEach(function(infoElement) {
  const upgradePart = infoElement.parentNode;

  upgradePart.addEventListener("mouseenter", function() {
    infoElement.style.display = "block";
  });

  upgradePart.addEventListener("mouseleave", function() {
    infoElement.style.display = "none";
  });
});