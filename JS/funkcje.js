//=====(ZAPIS)=====
function saveGame() {
    let save = {
        //=====(ZMIENNE DO ZAPISU)=====
        currentQuestLv: currentQuestLv,
        money: money,
        multiplier: multiplier,
        rebirth: rebirth,
        superRebirth: superRebirth,
        mega: mega,
        up1Count: up1Count,
        up1Cost: up1Cost,
        up1Boost: up1Boost,
        up1Cap: up1Cap,
        up2Count: up2Count,
        up2Cost: up2Cost,
        up2Boost: up2Boost,
        up2Active: up2Active,
        up3Count: up3Count,
        up3Cost: up3Cost,
        up3Boost: up3Boost,
        up3Cap: up3Cap,
        up4Count: up4Count,
        up4Cost: up4Cost,
        up4Boost: up4Boost,
        up4Active: up4Active,
        playTime: playTime,
        up5Count: up5Count,
        up5Cost: up5Cost,
        up5Boost: up5Boost,
        up5Active: up5Active,
        up6Count: up6Count,
        up6Cost: up6Cost,
        up6Boost: up6Boost,
        up6Cap: up6Cap,
        up7Count: up7Count,
        up7Cost: up7Cost,
        up7Boost: up7Boost,
        up8Count: up8Count,
        up8Cost: up8Cost,
        up8Boost: up8Boost,
        up8Active: up8Active,
        up9Count: up9Count,
        up9Active: up9Active,
        up9Cost : up9Cost,
        toUpgradeVis : toUpgradeVis,
        up3Vis : up3Vis,
        up4Vis : up4Vis,
        up5Vis : up5Vis,
        up6Vis : up6Vis,
        up7Vis : up7Vis,
        up8Vis : up8Vis,
        up9Vis : up9Vis,
        SRVis : SRVis,
        SRUpgVis : SRUpgVis,
        SRStatsVis : SRStatsVis,
        SRMultiVis : SRMultiVis,
        upgradeBlockVis : upgradeBlockVis,
        upgradesStatsVis : upgradesStatsVis,
        upgrade3StatsVis : upgrade3StatsVis,
        upgrade4StatsVis : upgrade4StatsVis,
        upgrade5StatsVis : upgrade5StatsVis,
        upgrade6StatsVis : upgrade6StatsVis,
        upgrade7StatsVis : upgrade7StatsVis,
        upgrade8StatsVis : upgrade8StatsVis,
        upgrade9StatsVis : upgrade9StatsVis,
        SRAlphabetVis : SRAlphabetVis,
        researchVis : researchVis ,
        researchers : researchers,
        researchSpeedUpgradesMulti : researchSpeedUpgradesMulti,
        researchersMoneyCost : researchersMoneyCost,
        researchersMultiplierCost : researchersMultiplierCost,
        researchersRebirthCost : researchersRebirthCost,
        researchersSuperRebirthCost : researchersSuperRebirthCost,
        researchSpeedMoneyCost : researchSpeedMoneyCost,
        researchSpeedMultiplierCost : researchSpeedMultiplierCost,
        researchSpeedRebirthCost : researchSpeedRebirthCost,
        researchSpeedSuperRebirthCost : researchSpeedSuperRebirthCost,
        researchSpeedMoneyMulti : researchSpeedMoneyMulti,
        researchSpeedMultiplierMulti : researchSpeedMultiplierMulti,
        researchSpeedRebirthMulti : researchSpeedRebirthMulti,
        researchSpeedSuperRebirthMulti : researchSpeedSuperRebirthMulti,
        currentResearchers : currentResearchers,
        researchTick : researchTick,
        up1Researchers : up1Researchers,
        up1TimeIs : up1TimeIs,
        up1TimeLeft : up1TimeLeft,
        up1Lv : up1Lv,
        up1Scale : up1Scale,
        up1BoostRe : up1BoostRe,
        up2Researchers : up2Researchers,
        up2TimeIs : up2TimeIs,
        up2TimeLeft : up2TimeLeft,
        up2Lv : up2Lv,
        up2Scale : up2Scale,
        up2BoostRe : up2BoostRe,
        up3Researchers : up3Researchers,
        up3TimeIs : up3TimeIs,
        up3TimeLeft : up3TimeLeft,
        up3Lv : up3Lv,
        up3Scale : up3Scale,
        up3BoostRe : up3BoostRe,
        up4Researchers : up4Researchers,
        up4TimeIs : up4TimeIs,
        up4TimeLeft : up4TimeLeft,
        up4Lv : up4Lv,
        up4Scale : up4Scale,
        up4BoostRe : up4BoostRe,
        up4BoostActive : up4BoostActive,
        up5Researchers : up5Researchers,
        up5TimeIs : up5TimeIs,
        up5TimeLeft : up5TimeLeft,
        up5Lv : up5Lv,
        up5Scale : up5Scale,
        up5BoostRe : up5BoostRe,
        up6Researchers : up6Researchers,
        up6TimeIs : up6TimeIs,
        up6TimeLeft : up6TimeLeft,
        up6Lv : up6Lv,
        up6Scale : up6Scale,
        up6BoostRe : up6BoostRe,
        up7Researchers : up7Researchers,
        up7TimeIs : up7TimeIs,
        up7TimeLeft : up7TimeLeft,
        up7Lv : up7Lv,
        up7Scale : up7Scale,
        up7BoostRe : up7BoostRe,
        up8Researchers : up8Researchers,
        up8TimeIs : up8TimeIs,
        up8TimeLeft : up8TimeLeft,
        up8Lv : up8Lv,
        up8Scale : up8Scale,
        up8BoostRe : up8BoostRe,
        up8BoostActive : up8BoostActive,
        up9Researchers : up9Researchers,
        up9TimeIs : up9TimeIs,
        up9TimeLeft : up9TimeLeft,
        up9Lv : up9Lv,
        up9Scale : up9Scale,
        up9BoostRe : up9BoostRe,
        up9BoostActive : up9BoostActive,
        up10Researchers : up10Researchers,
        up10TimeIs : up10TimeIs,
        up10TimeLeft : up10TimeLeft,
        up10Lv : up10Lv,
        up10Scale : up10Scale,
        up10BoostRe : up10BoostRe,
        up11Researchers : up11Researchers,
        up11TimeIs : up11TimeIs,
        up11TimeLeft : up11TimeLeft,
        up11Lv : up11Lv,
        up11Scale : up11Scale,
        up11BoostRe : up11BoostRe,
        up11BoostActive : up11BoostActive,
        up12Researchers : up12Researchers,
        up12TimeIs : up12TimeIs,
        up12TimeLeft : up12TimeLeft,
        up12Lv : up12Lv,
        up12Scale : up12Scale,
        up12BoostRe : up12BoostRe,
        up12BoostActive : up12BoostActive,
        multiplierGain : multiplierGain,
        multiplierGainTest : multiplierGainTest,
        multiplierTime : multiplierTime,
        multiplierTimeTest : multiplierTimeTest,
        multiplierGainResearchers : multiplierGainResearchers,
        multiplierGainTimeIs : multiplierGainTimeIs,
        multiplierGainTimeLeft : multiplierGainTimeLeft,
        multiplierScale : multiplierScale,
        multiplierTimeResearchers : multiplierTimeResearchers,
        multiplierTimeTimeIs : multiplierTimeTimeIs,
        multiplierTimeTimeLeft : multiplierTimeTimeLeft,
        multiplierGainLv : multiplierGainLv,
        multiplierTimeLv : multiplierTimeLv,
        rebirthGain : rebirthGain,
        rebirthGainTest : rebirthGainTest,
        rebirthTime : rebirthTime,
        rebirthTimeTest : rebirthTimeTest,
        rebirthGainResearchers : rebirthGainResearchers,
        rebirthGainTimeIs : rebirthGainTimeIs,
        rebirthGainTimeLeft : rebirthGainTimeLeft,
        rebirthScale : rebirthScale,
        rebirthTimeResearchers : rebirthTimeResearchers,
        rebirthTimeTimeIs : rebirthTimeTimeIs,
        rebirthTimeTimeLeft : rebirthTimeTimeLeft,
        rebirthGainLv : rebirthGainLv,
        rebirthTimeLv : rebirthTimeLv,
        superRebirthGain : superRebirthGain,
        superRebirthGainTest : superRebirthGainTest,
        superRebirthTime : superRebirthTime,
        superRebirthTimeTest : superRebirthTimeTest,
        superRebirthGainResearchers : superRebirthGainResearchers,
        superRebirthGainTimeIs : superRebirthGainTimeIs,
        superRebirthGainTimeLeft : superRebirthGainTimeLeft,
        superRebirthScale : superRebirthScale,
        superRebirthTimeResearchers : superRebirthTimeResearchers,
        superRebirthTimeTimeIs : superRebirthTimeTimeIs,
        superRebirthTimeTimeLeft : superRebirthTimeTimeLeft,
        superRebirthGainLv : superRebirthGainLv,
        superRebirthTimeLv : superRebirthTimeLv,
        up2ReVis : up2ReVis,
        up3ReVis : up3ReVis,
        up4ReVis : up4ReVis,
        up6ReVis : up6ReVis,
        up7ReVis : up7ReVis,
        up8ReVis : up8ReVis,
        up9ReVis : up9ReVis,
        up10ReVis : up10ReVis,
        up11ReVis : up11ReVis,
        up12ReVis : up12ReVis,
        MeVis : MeVis,
        rebirthAutomationVis : rebirthAutomationVis,
        superRebirthAutomationVis : superRebirthAutomationVis,
        upgradeUnlocked : upgradeUnlocked,
        superRebirthUnlocked : superRebirthUnlocked,
        megaUnlocked : megaUnlocked,
        up3Unlocked : up3Unlocked,
        up4Unlocked : up4Unlocked,
        up5Unlocked : up5Unlocked,
        up6Unlocked : up6Unlocked,
        up7Unlocked : up7Unlocked,
        up8Unlocked : up8Unlocked,
        up9Unlocked : up9Unlocked,
        researchUnlocked : researchUnlocked,
        re2Unlocked : re2Unlocked,
        re3Unlocked : re3Unlocked,
        re4Unlocked : re4Unlocked,
        re6Unlocked : re6Unlocked,
        re7Unlocked : re7Unlocked,
        re8Unlocked : re8Unlocked,
        re9Unlocked : re9Unlocked,
        re10Unlocked : re10Unlocked,
        re11Unlocked : re11Unlocked,
        re12Unlocked : re12Unlocked,
    };
    localStorage.setItem("mojaGraSave", JSON.stringify(save));
    console.log("Gra zapisana!");
}
//=====(WCZYTYWANIE)=====
function loadGame() {
    let rawSave = localStorage.getItem("mojaGraSave");
    if (rawSave) {
        try {
            let decodedSave;

            // Sprawdzamy, czy zapis zaczyna się od znaku '{' (stary format JSON)
            if (rawSave.trim().startsWith('{')) {
                console.log("Wykryto stary format zapisu JSON. Automatyczna konwersja...");
                decodedSave = JSON.parse(rawSave);
            } else {
                // Jeśli to zaszyfrowany string Base64, dekodujemy go za pomocą atob
                decodedSave = JSON.parse(atob(rawSave));
            }

            // --- WALIDACJA I AUTO-NAPRAWA STARYCH ZAPISÓW ---
            if (decodedSave.currentQuestLv === undefined || isNaN(decodedSave.currentQuestLv)) {
                decodedSave.currentQuestLv = 1;
            }

            // POPRAWKA: Przypisujemy wartości z 'decodedSave', a nie z 'save'
            currentQuestLv = decodedSave.currentQuestLv;
            money = decodedSave.money !== undefined ? decodedSave.money : 0;
            multiplier = decodedSave.multiplier !== undefined ? decodedSave.multiplier : 0;
            rebirth = decodedSave.rebirth !== undefined ? decodedSave.rebirth : 0;
            superRebirth = decodedSave.superRebirth !== undefined ? decodedSave.superRebirth : 0;
            mega = decodedSave.mega !== undefined ? decodedSave.mega : 0;
            up1Count = decodedSave.up1Count !== undefined ? decodedSave.up1Count : 0;
            up1Cost = decodedSave.up1Cost !== undefined ? decodedSave.up1Cost : 10000;
            up1Boost = decodedSave.up1Boost !== undefined ? decodedSave.up1Boost : 1;
            up1Cap = decodedSave.up1Cap !== undefined ? decodedSave.up1Cap : 10;
            up2Count = decodedSave.up2Count !== undefined ? decodedSave.up2Count : 0;
            up2Cost = decodedSave.up2Cost !== undefined ? decodedSave.up2Cost : 250000;
            up2Boost = decodedSave.up2Boost !== undefined ? decodedSave.up2Boost : 1;
            up2Active = decodedSave.up2Active !== undefined ? decodedSave.up2Active : false;
            up3Count = decodedSave.up3Count !== undefined ? decodedSave.up3Count : 0;
            up3Cost = decodedSave.up3Cost !== undefined ? decodedSave.up3Cost : 250;
            up3Boost = decodedSave.up3Boost !== undefined ? decodedSave.up3Boost : 1;
            up3Cap = decodedSave.up3Cap !== undefined ? decodedSave.up3Cap : 10;
            up4Count = decodedSave.up4Count !== undefined ? decodedSave.up4Count : 0;
            up4Cost = decodedSave.up4Cost !== undefined ? decodedSave.up4Cost : 4000;
            up4Boost = decodedSave.up4Boost !== undefined ? decodedSave.up4Boost : 1;
            up4Active = decodedSave.up4Active !== undefined ? decodedSave.up4Active : false;
            playTime = decodedSave.playTime !== undefined ? decodedSave.playTime : 0;
            up5Count = decodedSave.up5Count !== undefined ? decodedSave.up5Count : 0;
            up5Cost = decodedSave.up5Cost !== undefined ? decodedSave.up5Cost : 20;
            up5Boost = decodedSave.up5Boost !== undefined ? decodedSave.up5Boost : 1;
            up5Active = decodedSave.up5Active !== undefined ? decodedSave.up5Active : false;
            up6Count = decodedSave.up6Count !== undefined ? decodedSave.up6Count : 0;
            up6Cost = decodedSave.up6Cost !== undefined ? decodedSave.up6Cost : 125;
            up6Boost = decodedSave.up6Boost !== undefined ? decodedSave.up6Boost : 1;
            up6Cap = decodedSave.up6Cap !== undefined ? decodedSave.up6Cap : 25;
            up7Count = decodedSave.up7Count !== undefined ? decodedSave.up7Count : 0;
            up7Cost = decodedSave.up7Cost !== undefined ? decodedSave.up7Cost : 8;
            up7Boost = decodedSave.up7Boost !== undefined ? decodedSave.up7Boost : 1;
            up8Count = decodedSave.up8Count !== undefined ? decodedSave.up8Count : 0;
            up8Cost = decodedSave.up8Cost !== undefined ? decodedSave.up8Cost : 25;
            up8Boost = decodedSave.up8Boost !== undefined ? decodedSave.up8Boost : 1;
            up8Active = decodedSave.up8Active !== undefined ? decodedSave.up8Active : false;
            up9Count = decodedSave.up9Count !== undefined ? decodedSave.up9Count : 0;
            up9Active = decodedSave.up9Active !== undefined ? decodedSave.up9Active : false;
            up9Cost = decodedSave.up9Cost !== undefined ? decodedSave.up9Cost : 1000;
            toUpgradeVis = decodedSave.toUpgradeVis !== undefined ? decodedSave.toUpgradeVis : false;
            up3Vis = decodedSave.up3Vis !== undefined ? decodedSave.up3Vis : false;
            up4Vis = decodedSave.up4Vis !== undefined ? decodedSave.up4Vis : false;
            up5Vis = decodedSave.up5Vis !== undefined ? decodedSave.up5Vis : false;
            up6Vis = decodedSave.up6Vis !== undefined ? decodedSave.up6Vis : false;
            up7Vis = decodedSave.up7Vis !== undefined ? decodedSave.up7Vis : false;
            up8Vis = decodedSave.up8Vis !== undefined ? decodedSave.up8Vis : false;
            up9Vis = decodedSave.up9Vis !== undefined ? decodedSave.up9Vis : false;
            SRVis = decodedSave.SRVis !== undefined ? decodedSave.SRVis : false;
            SRUpgVis = decodedSave.SRUpgVis !== undefined ? decodedSave.SRUpgVis : false;
            SRStatsVis = decodedSave.SRStatsVis !== undefined ? decodedSave.SRStatsVis : false;
            SRMultiVis = decodedSave.SRMultiVis !== undefined ? decodedSave.SRMultiVis : false;
            researchVis = decodedSave.researchVis !== undefined ? decodedSave.researchVis : false;
            upgradeBlockVis = decodedSave.upgradeBlockVis !== undefined ? decodedSave.upgradeBlockVis : false;
            upgradesStatsVis = decodedSave.upgradesStatsVis !== undefined ? decodedSave.upgradesStatsVis : false;
            upgrade3StatsVis = decodedSave.upgrade3StatsVis !== undefined ? decodedSave.upgrade3StatsVis : false;
            upgrade4StatsVis = decodedSave.upgrade4StatsVis !== undefined ? decodedSave.upgrade4StatsVis : false;
            upgrade5StatsVis = decodedSave.upgrade5StatsVis !== undefined ? decodedSave.upgrade5StatsVis : false;
            upgrade6StatsVis = decodedSave.upgrade6StatsVis !== undefined ? decodedSave.upgrade6StatsVis : false;
            upgrade7StatsVis = decodedSave.upgrade7StatsVis !== undefined ? decodedSave.upgrade7StatsVis : false;
            upgrade8StatsVis = decodedSave.upgrade8StatsVis !== undefined ? decodedSave.upgrade8StatsVis : false;
            upgrade9StatsVis = decodedSave.upgrade9StatsVis !== undefined ? decodedSave.upgrade9StatsVis : false;
            SRAlphabetVis = decodedSave.SRAlphabetVis !== undefined ? decodedSave.SRAlphabetVis : false;
            researchers = decodedSave.researchers !== undefined ? decodedSave.researchers : 0;
            currentResearchers = decodedSave.currentResearchers !== undefined ? decodedSave.currentResearchers : 0;
            researchSpeedUpgradesMulti = decodedSave.researchSpeedUpgradesMulti !== undefined ? decodedSave.researchSpeedUpgradesMulti : 1;
            researchersMoneyCost = decodedSave.researchersMoneyCost !== undefined ? decodedSave.researchersMoneyCost : 1000000000000;
            researchersMultiplierCost = decodedSave.researchersMultiplierCost !== undefined ? decodedSave.researchersMultiplierCost : 1000000000;
            researchersRebirthCost = decodedSave.researchersRebirthCost !== undefined ? decodedSave.researchersRebirthCost : 5000000;
            researchersSuperRebirthCost = decodedSave.researchersSuperRebirthCost !== undefined ? decodedSave.researchersSuperRebirthCost : 2000;
            researchSpeedMoneyCost = decodedSave.researchSpeedMoneyCost !== undefined ? decodedSave.researchSpeedMoneyCost : 10000000000;
            researchSpeedMultiplierCost = decodedSave.researchSpeedMultiplierCost !== undefined ? decodedSave.researchSpeedMultiplierCost : 25000000;
            researchSpeedRebirthCost = decodedSave.researchSpeedRebirthCost !== undefined ? decodedSave.researchSpeedRebirthCost : 500000;
            researchSpeedSuperRebirthCost = decodedSave.researchSpeedSuperRebirthCost !== undefined ? decodedSave.researchSpeedSuperRebirthCost : 250;
            researchSpeedMoneyMulti = decodedSave.researchSpeedMoneyMulti !== undefined ? decodedSave.researchSpeedMoneyMulti : 1;
            researchSpeedMultiplierMulti = decodedSave.researchSpeedMultiplierMulti !== undefined ? decodedSave.researchSpeedMultiplierMulti : 1;
            researchSpeedRebirthMulti = decodedSave.researchSpeedRebirthMulti !== undefined ? decodedSave.researchSpeedRebirthMulti : 1;
            researchSpeedSuperRebirthMulti = decodedSave.researchSpeedSuperRebirthMulti !== undefined ? decodedSave.researchSpeedSuperRebirthMulti : 1;
            researchTick = decodedSave.researchTick !== undefined ? decodedSave.researchTick : 1000;
            up1Researchers = decodedSave.up1Researchers !== undefined ? decodedSave.up1Researchers : 0;
            up1TimeIs = decodedSave.up1TimeIs !== undefined ? decodedSave.up1TimeIs : 0;
            up1TimeLeft = decodedSave.up1TimeLeft !== undefined ? decodedSave.up1TimeLeft : 60;
            up1Lv = decodedSave.up1Lv !== undefined ? decodedSave.up1Lv : 0;
            up1Scale = decodedSave.up1Scale !== undefined ? decodedSave.up1Scale : 1.4;
            up1BoostRe = decodedSave.up1BoostRe !== undefined ? decodedSave.up1BoostRe : 1;
            up2Researchers = decodedSave.up2Researchers !== undefined ? decodedSave.up2Researchers : 0;
            up2TimeIs = decodedSave.up2TimeIs !== undefined ? decodedSave.up2TimeIs : 0;
            up2TimeLeft = decodedSave.up2TimeLeft !== undefined ? decodedSave.up2TimeLeft : 200;
            up2Lv = decodedSave.up2Lv !== undefined ? decodedSave.up2Lv : 0;
            up2Scale = decodedSave.up2Scale !== undefined ? decodedSave.up2Scale : 1.4;
            up2BoostRe = decodedSave.up2BoostRe !== undefined ? decodedSave.up2BoostRe : 0;
            up3Researchers = decodedSave.up3Researchers !== undefined ? decodedSave.up3Researchers : 0;
            up3TimeIs = decodedSave.up3TimeIs !== undefined ? decodedSave.up3TimeIs : 0;
            up3TimeLeft = decodedSave.up3TimeLeft !== undefined ? decodedSave.up3TimeLeft : 450;
            up3Lv = decodedSave.up3Lv !== undefined ? decodedSave.up3Lv : 0;
            up3Scale = decodedSave.up3Scale !== undefined ? decodedSave.up3Scale : 1.3;
            up3BoostRe = decodedSave.up3BoostRe !== undefined ? decodedSave.up3BoostRe : 1;
            up4Researchers = decodedSave.up4Researchers !== undefined ? decodedSave.up4Researchers : 0;
            up4TimeIs = decodedSave.up4TimeIs !== undefined ? decodedSave.up4TimeIs : 0;
            up4TimeLeft = decodedSave.up4TimeLeft !== undefined ? decodedSave.up4TimeLeft : 800;
            up4Lv = decodedSave.up4Lv !== undefined ? decodedSave.up4Lv : 0;
            up4Scale = decodedSave.up4Scale !== undefined ? decodedSave.up4Scale : 1.5;
            up4BoostRe = decodedSave.up4BoostRe !== undefined ? decodedSave.up4BoostRe : 1;
            up4BoostActive = decodedSave.up4BoostActive !== undefined ? decodedSave.up4BoostActive : false;
            up5Researchers = decodedSave.up5Researchers !== undefined ? decodedSave.up5Researchers : 0;
            up5TimeIs = decodedSave.up5TimeIs !== undefined ? decodedSave.up5TimeIs : 0;
            up5TimeLeft = decodedSave.up5TimeLeft !== undefined ? decodedSave.up5TimeLeft : 120;
            up5Lv = decodedSave.up5Lv !== undefined ? decodedSave.up5Lv : 0;
            up5Scale = decodedSave.up5Scale !== undefined ? decodedSave.up5Scale : 1.6;
            up5BoostRe = decodedSave.up5BoostRe !== undefined ? decodedSave.up5BoostRe : 0;
            up6Researchers = decodedSave.up6Researchers !== undefined ? decodedSave.up6Researchers : 0;
            up6TimeIs = decodedSave.up6TimeIs !== undefined ? decodedSave.up6TimeIs : 0;
            up6TimeLeft = decodedSave.up6TimeLeft !== undefined ? decodedSave.up6TimeLeft : 300;
            up6Lv = decodedSave.up6Lv !== undefined ? decodedSave.up6Lv : 0;
            up6Scale = decodedSave.up6Scale !== undefined ? decodedSave.up6Scale : 1.6;
            up6BoostRe = decodedSave.up6BoostRe !== undefined ? decodedSave.up6BoostRe : 1;
            up7Researchers = decodedSave.up7Researchers !== undefined ? decodedSave.up7Researchers : 0;
            up7TimeIs = decodedSave.up7TimeIs !== undefined ? decodedSave.up7TimeIs : 0;
            up7TimeLeft = decodedSave.up7TimeLeft !== undefined ? decodedSave.up7TimeLeft : 500;
            up7Lv = decodedSave.up7Lv !== undefined ? decodedSave.up7Lv : 0;
            up7Scale = decodedSave.up7Scale !== undefined ? decodedSave.up7Scale : 2.2;
            up7BoostRe = decodedSave.up7BoostRe !== undefined ? decodedSave.up7BoostRe : 0;
            up8Researchers = decodedSave.up8Researchers !== undefined ? decodedSave.up8Researchers : 0;
            up8TimeIs = decodedSave.up8TimeIs !== undefined ? decodedSave.up8TimeIs : 0;
            up8TimeLeft = decodedSave.up8TimeLeft !== undefined ? decodedSave.up8TimeLeft : 1200;
            up8Lv = decodedSave.up8Lv !== undefined ? decodedSave.up8Lv : 0;
            up8Scale = decodedSave.up8Scale !== undefined ? decodedSave.up8Scale : 2;
            up8BoostRe = decodedSave.up8BoostRe !== undefined ? decodedSave.up8BoostRe : 1;
            up8BoostActive = decodedSave.up8BoostActive !== undefined ? decodedSave.up8BoostActive : false;
            up9Researchers = decodedSave.up9Researchers !== undefined ? decodedSave.up9Researchers : 0;
            up9TimeIs = decodedSave.up9TimeIs !== undefined ? decodedSave.up9TimeIs : 0;
            up9TimeLeft = decodedSave.up9TimeLeft !== undefined ? decodedSave.up9TimeLeft : 600;
            up9Lv = decodedSave.up9Lv !== undefined ? decodedSave.up9Lv : 0;
            up9Scale = decodedSave.up9Scale !== undefined ? decodedSave.up9Scale : 1.6;
            up9BoostRe = decodedSave.up9BoostRe !== undefined ? decodedSave.up9BoostRe : 1;
            up9BoostActive = decodedSave.up9BoostActive !== undefined ? decodedSave.up9BoostActive : false;
            up10Researchers = decodedSave.up10Researchers !== undefined ? decodedSave.up10Researchers : 0;
            up10TimeIs = decodedSave.up10TimeIs !== undefined ? decodedSave.up10TimeIs : 0;
            up10TimeLeft = decodedSave.up10TimeLeft !== undefined ? decodedSave.up10TimeLeft : 1000;
            up10Lv = decodedSave.up10Lv !== undefined ? decodedSave.up10Lv : 0;
            up10Scale = decodedSave.up10Scale !== undefined ? decodedSave.up10Scale : 1.3;
            up10BoostRe = decodedSave.up10BoostRe !== undefined ? decodedSave.up10BoostRe : 1;
            up11Researchers = decodedSave.up11Researchers !== undefined ? decodedSave.up11Researchers : 0;
            up11TimeIs = decodedSave.up11TimeIs !== undefined ? decodedSave.up11TimeIs : 0;
            up11TimeLeft = decodedSave.up11TimeLeft !== undefined ? decodedSave.up11TimeLeft : 2400;
            up11Lv = decodedSave.up11Lv !== undefined ? decodedSave.up11Lv : 0;
            up11Scale = decodedSave.up11Scale !== undefined ? decodedSave.up11Scale : 1.8;
            up11BoostRe = decodedSave.up11BoostRe !== undefined ? decodedSave.up11BoostRe : 1;
            up11BoostActive = decodedSave.up11BoostActive !== undefined ? decodedSave.up11BoostActive : false;
            up12Researchers = decodedSave.up12Researchers !== undefined ? decodedSave.up12Researchers : 0;
            up12TimeIs = decodedSave.up12TimeIs !== undefined ? decodedSave.up12TimeIs : 0;
            up12TimeLeft = decodedSave.up12TimeLeft !== undefined ? decodedSave.up12TimeLeft : 100000000000;
            up12Lv = decodedSave.up12Lv !== undefined ? decodedSave.up12Lv : 0;
            up12Scale = decodedSave.up12Scale !== undefined ? decodedSave.up12Scale : 1.8;
            up12BoostRe = decodedSave.up12BoostRe !== undefined ? decodedSave.up12BoostRe : 1;
            up12BoostActive = decodedSave.up12BoostActive !== undefined ? decodedSave.up12BoostActive : false;
            multiplierGain = decodedSave.multiplierGain !== undefined ? decodedSave.multiplierGain : 0;
            multiplierGainTest = decodedSave.multiplierGainTest !== undefined ? decodedSave.multiplierGainTest : 0.1;
            multiplierTime = decodedSave.multiplierTime !== undefined ? decodedSave.multiplierTime : 10;
            multiplierTimeTest = decodedSave.multiplierTimeTest !== undefined ? decodedSave.multiplierTimeTest : 8;
            multiplierGainResearchers = decodedSave.multiplierGainResearchers !== undefined ? decodedSave.multiplierGainResearchers : 0;
            multiplierGainTimeIs = decodedSave.multiplierGainTimeIs !== undefined ? decodedSave.multiplierGainTimeIs : 0;
            multiplierGainTimeLeft = decodedSave.multiplierGainTimeLeft !== undefined ? decodedSave.multiplierGainTimeLeft : 150;
            multiplierScale = decodedSave.multiplierScale !== undefined ? decodedSave.multiplierScale : 1.7;
            multiplierTimeResearchers = decodedSave.multiplierTimeResearchers !== undefined ? decodedSave.multiplierTimeResearchers : 0;
            multiplierTimeTimeIs = decodedSave.multiplierTimeTimeIs !== undefined ? decodedSave.multiplierTimeTimeIs : 0;
            multiplierTimeTimeLeft = decodedSave.multiplierTimeTimeLeft !== undefined ? decodedSave.multiplierTimeTimeLeft : 200;
            multiplierGainLv = decodedSave.multiplierGainLv !== undefined ? decodedSave.multiplierGainLv : 0;
            multiplierTimeLv = decodedSave.multiplierTimeLv !== undefined ? decodedSave.multiplierTimeLv : 0;
            rebirthGain = decodedSave.rebirthGain !== undefined ? decodedSave.rebirthGain : 0;
            rebirthGainTest = decodedSave.rebirthGainTest !== undefined ? decodedSave.rebirthGainTest : 0.1;
            rebirthTime = decodedSave.rebirthTime !== undefined ? decodedSave.rebirthTime : 10;
            rebirthTimeTest = decodedSave.rebirthTimeTest !== undefined ? decodedSave.rebirthTimeTest : 8;
            rebirthGainResearchers = decodedSave.rebirthGainResearchers !== undefined ? decodedSave.rebirthGainResearchers : 0;
            rebirthGainTimeIs = decodedSave.rebirthGainTimeIs !== undefined ? decodedSave.rebirthGainTimeIs : 0;
            rebirthGainTimeLeft = decodedSave.rebirthGainTimeLeft !== undefined ? decodedSave.rebirthGainTimeLeft : 500;
            rebirthScale = decodedSave.rebirthScale !== undefined ? decodedSave.rebirthScale : 1.9;
            rebirthTimeResearchers = decodedSave.rebirthTimeResearchers !== undefined ? decodedSave.rebirthTimeResearchers : 0;
            rebirthTimeTimeIs = decodedSave.rebirthTimeTimeIs !== undefined ? decodedSave.rebirthTimeTimeIs : 0;
            rebirthTimeTimeLeft = decodedSave.rebirthTimeTimeLeft !== undefined ? decodedSave.rebirthTimeTimeLeft : 450;
            rebirthGainLv = decodedSave.rebirthGainLv !== undefined ? decodedSave.rebirthGainLv : 0;
            rebirthTimeLv = decodedSave.rebirthTimeLv !== undefined ? decodedSave.rebirthTimeLv : 0;
            superRebirthGain = decodedSave.superRebirthGain !== undefined ? decodedSave.superRebirthGain : 0;
            superRebirthGainTest = decodedSave.superRebirthGainTest !== undefined ? decodedSave.superRebirthGainTest : 0.1;
            superRebirthTime = decodedSave.superRebirthTime !== undefined ? decodedSave.superRebirthTime : 10;
            superRebirthTimeTest = decodedSave.superRebirthTimeTest !== undefined ? decodedSave.superRebirthTimeTest : 8;
            superRebirthGainResearchers = decodedSave.superRebirthGainResearchers !== undefined ? decodedSave.superRebirthGainResearchers : 0;
            superRebirthGainTimeIs = decodedSave.superRebirthGainTimeIs !== undefined ? decodedSave.superRebirthGainTimeIs : 0;
            superRebirthGainTimeLeft = decodedSave.superRebirthGainTimeLeft !== undefined ? decodedSave.superRebirthGainTimeLeft : 900;
            superRebirthScale = decodedSave.superRebirthScale !== undefined ? decodedSave.superRebirthScale : 2.2;
            superRebirthTimeResearchers = decodedSave.superRebirthTimeResearchers !== undefined ? decodedSave.superRebirthTimeResearchers : 0;
            superRebirthTimeTimeIs = decodedSave.superRebirthTimeTimeIs !== undefined ? decodedSave.superRebirthTimeTimeIs : 0;
            superRebirthTimeTimeLeft = decodedSave.superRebirthTimeTimeLeft !== undefined ? decodedSave.superRebirthTimeTimeLeft : 920;
            superRebirthGainLv = decodedSave.superRebirthGainLv !== undefined ? decodedSave.superRebirthGainLv : 0;
            superRebirthTimeLv = decodedSave.superRebirthTimeLv !== undefined ? decodedSave.superRebirthTimeLv : 0;
            up2ReVis = decodedSave.up2ReVis !== undefined ? decodedSave.up2ReVis : false;
            up3ReVis = decodedSave.up3ReVis !== undefined ? decodedSave.up3ReVis : false;
            up4ReVis = decodedSave.up4ReVis !== undefined ? decodedSave.up4ReVis : false;
            up6ReVis = decodedSave.up6ReVis !== undefined ? decodedSave.up6ReVis : false;
            up7ReVis = decodedSave.up7ReVis !== undefined ? decodedSave.up7ReVis : false;
            up8ReVis = decodedSave.up8ReVis !== undefined ? decodedSave.up8ReVis : false;
            up9ReVis = decodedSave.up9ReVis !== undefined ? decodedSave.up9ReVis : false;
            up10ReVis = decodedSave.up10ReVis !== undefined ? decodedSave.up10ReVis : false;
            up11ReVis = decodedSave.up11ReVis !== undefined ? decodedSave.up11ReVis : false;
            up12ReVis = decodedSave.up12ReVis !== undefined ? decodedSave.up12ReVis : false;
            MeVis = decodedSave.MeVis !== undefined ? decodedSave.MeVis : false;
            rebirthAutomationVis = decodedSave.rebirthAutomationVis !== undefined ? decodedSave.rebirthAutomationVis : false;
            superRebirthAutomationVis = decodedSave.superRebirthAutomationVis !== undefined ? decodedSave.superRebirthAutomationVis : false;
            upgradeUnlocked  = decodedSave.upgradeUnlocked !== undefined ? decodedSave.upgradeUnlocked : false;
            superRebirthUnlocked = decodedSave.superRebirthUnlocked !== undefined ? decodedSave.superRebirthUnlocked : false;
            megaUnlocked = decodedSave.megaUnlocked !== undefined ? decodedSave.megaUnlocked : false;
            up3Unlocked = decodedSave.up3Unlocked !== undefined ? decodedSave.up3Unlocked : false;
            up4Unlocked = decodedSave.up4Unlocked !== undefined ? decodedSave.up4Unlocked : false;
            up5Unlocked = decodedSave.up5Unlocked !== undefined ? decodedSave.up5Unlocked : false;
            up6Unlocked = decodedSave.up6Unlocked !== undefined ? decodedSave.up6Unlocked : false;
            up7Unlocked = decodedSave.up7Unlocked !== undefined ? decodedSave.up7Unlocked : false;
            up8Unlocked = decodedSave.up8Unlocked !== undefined ? decodedSave.up8Unlocked : false;
            up9Unlocked = decodedSave.up9Unlocked !== undefined ? decodedSave.up9Unlocked : false;
            researchUnlocked = decodedSave.researchUnlocked !== undefined ? decodedSave.researchUnlocked : false;
            re2Unlocked = decodedSave.re2Unlocked !== undefined ? decodedSave.re2Unlocked : false;
            re3Unlocked = decodedSave.re3Unlocked !== undefined ? decodedSave.re3Unlocked : false;
            re4Unlocked = decodedSave.re4Unlocked !== undefined ? decodedSave.re4Unlocked : false;
            re6Unlocked = decodedSave.re6Unlocked !== undefined ? decodedSave.re6Unlocked : false;
            re7Unlocked = decodedSave.re7Unlocked !== undefined ? decodedSave.re7Unlocked : false;
            re8Unlocked = decodedSave.re8Unlocked !== undefined ? decodedSave.re8Unlocked : false;
            re9Unlocked = decodedSave.re9Unlocked !== undefined ? decodedSave.re9Unlocked : false;
            re10Unlocked = decodedSave.re10Unlocked !== undefined ? decodedSave.re10Unlocked : false;
            re11Unlocked = decodedSave.re11Unlocked !== undefined ? decodedSave.re11Unlocked : false;
            re12Unlocked = decodedSave.re12Unlocked !== undefined ? decodedSave.re12Unlocked : false;
            console.log("Gra wczytana poprawnie!");
        } catch (e) {
            console.error("Błąd dekodowania zapisu, tworzę nowy...", e);
            initFreshSave();
        }
    } else {
        initFreshSave();
    }
}
//=====(ADMIN)=====
function admin(){
    money = 1000000000000000000000000000000;
    multiplier = 1000000000000000000000000000000;
    rebirth = 1000000000000000000000000000000;
    superRebirth = 1000000000000000000000000000000;
    mega = 1000000000000000000000000000000;
}
//=====(POWIADOMIENIA , KROPKA)=====
function showNotification(buttonId, panelId) {
    let btn = document.getElementById(buttonId);
    let panel = document.getElementById(panelId);
    if (!btn || !panel) return;
    let isCurrentPanelOpen = (panel.style.display !== "none" && panel.style.visibility !== "hidden");
    if (!isCurrentPanelOpen) {
        btn.classList.add("has-notification");
        btn.addEventListener("click", function() {
            btn.classList.remove("has-notification");
        }, { once: true });
    }
}
function allNotification(buttonId) {
    let btn = document.getElementById(buttonId);
    if (btn) {
        btn.classList.add("has-notification");
        btn.addEventListener("click", function() {
            btn.classList.remove("has-notification");
        }, { once: true });
    } else {
        console.warn("Nie znaleziono przycisku o ID: " + buttonId);
    }
}
//=====(HARD RESET)=====
function resetGame() {
    let czyPotwierdza = confirm("Are you sure you want to reset all your progress? This change is PERMANENT!");
    if (!czyPotwierdza) return;
    localStorage.clear();
    window.onbeforeunload = null;
    initFreshSave();
    location.reload();
}
//=====(CZYSTY SAVE)=====
function initFreshSave() {
    currentQuestLv = 1;
    money = 0;
    multiplier = 0;
    rebirth = 0;
    superRebirth = 0;
    mega = 0;
    up1Count = 0;
    up1Cost = 10000;
    up1Boost = 1;
    up1Cap = 10;
    up2Count = 0;
    up2Cost = 250000;
    up2Active = false;
    up2Boost = 1;
    up3Count = 0;
    up3Cost = 250;
    up3Boost = 1;
    up3Cap = 10;
    up4Count = 0;
    up4Cost = 4000;
    up4Active = false;
    up4Boost = 1;
    playTime = 0;
    up5Count = 0;
    up5Cost = 20;
    up5Active = false;
    up5Boost = 1;
    up6Count = 0;
    up6Cost = 125;
    up6Boost = 1;
    up6Cap = 25;
    up7Count = 0;
    up7Cost = 8;
    up7Boost = 1;
    up8Count = 0;
    up8Cost = 25;
    up8Active = false;
    up8Boost = 1;
    up9Count = 0;
    up9Cost = 1000;
    up9Active = false;
    toUpgradeVis = false;
    up3Vis = false;
    up4Vis = false;
    up5Vis = false;
    up6Vis = false;
    up7Vis = false;
    up8Vis = false;
    up9Vis = false;
    SRVis = false;
    SRUpgVis = false;
    SRStatsVis = false;
    SRMultiVis = false;
    researchVis = false;
    upgradeBlockVis = false;
    upgradesStatsVis = false;
    upgrade3StatsVis = false;
    upgrade4StatsVis = false;
    upgrade5StatsVis = false;
    upgrade6StatsVis = false;
    upgrade7StatsVis = false;
    upgrade8StatsVis = false;
    upgrade9StatsVis = false;
    SRAlphabetVis = false;
    up2ReVis = false;
    up3ReVis = false;
    up4ReVis = false;
    up6ReVis = false;
    up7ReVis = false;
    up8ReVis = false;
    up9ReVis = false;
    up10ReVis = false;
    up11ReVis = false;
    up12ReVis = false;
    MeVis = false;
    rebirthAutomationVis = false;
    superRebirthAutomationVis = false;
    meStatsInfoVis = false;
    researchers = 0;
    researchersMoneyCost = 1000000000000;
    researchersMultiplierCost = 1000000000;
    researchersRebirthCost = 5000000;
    researchersSuperRebirthCost = 2000;
    researchSpeedMoneyCost = 10000000000;
    researchSpeedMultiplierCost = 25000000;
    researchSpeedRebirthCost = 500000;
    researchSpeedSuperRebirthCost = 250;
    researchSpeedMoneyMulti = 1;
    researchSpeedMultiplierMulti = 1;
    researchSpeedRebirthMulti = 1;
    researchSpeedSuperRebirthMulti = 1;
    researchSpeedUpgradesMulti = 1;
    researchTick = 1000;
    totalResearchLv = 0;
    currentResearchers = 0;
    researchersSpending = 0;
    up1Researchers = 0;
    up1TimeIs = 0;
    up1TimeLeft = 60;
    up1Lv = 0;
    up1Scale = 1.4;
    up1BoostRe = 1;
    up2Researchers = 0;
    up2TimeIs = 0;
    up2TimeLeft = 200;
    up2Lv = 0;
    up2Scale = 1.4;
    up2BoostRe = 0;
    up3Researchers = 0;
    up3TimeIs = 0;
    up3TimeLeft = 450;
    up3Lv = 0;
    up3Scale = 1.3;
    up3BoostRe = 1;
    up4Researchers = 0;
    up4TimeIs = 0;
    up4TimeLeft = 800;
    up4Lv = 0;
    up4Scale = 1.5;
    up4BoostRe = 1;
    up4BoostActive = false;
    up5Researchers = 0;
    up5TimeIs = 0;
    up5TimeLeft = 120;
    up5Lv = 0;
    up5Scale = 1.6;
    up5BoostRe = 0;
    up6Researchers = 0;
    up6TimeIs = 0;
    up6TimeLeft = 300;
    up6Lv = 0;
    up6Scale = 1.6;
    up6BoostRe = 1;
    up7Researchers = 0;
    up7TimeIs = 0;
    up7TimeLeft = 500;
    up7Lv = 0;
    up7Scale = 2.2;
    up7BoostRe = 0;
    up8Researchers = 0;
    up8TimeIs = 0;
    up8TimeLeft = 1200;
    up8Lv = 0;
    up8Scale = 2;
    up8BoostRe = 1;
    up8BoostActive = false;
    up9Researchers = 0;
    up9TimeIs = 0;
    up9TimeLeft = 600;
    up9Lv = 0;
    up9Scale = 1.6;
    up9BoostRe = 1;
    up9BoostActive = false;
    up10Researchers = 0;
    up10TimeIs = 0;
    up10TimeLeft = 1000;
    up10Lv = 0;
    up10Scale = 1.3;
    up10BoostRe = 1;
    up11Researchers = 0;
    up11TimeIs = 0;
    up11TimeLeft = 2400;
    up11Lv = 1;
    up11Scale = 1.8;
    up11BoostRe = 1;
    up11BoostActive = false;
    up12Researchers = 0;
    up12TimeIs = 0;
    up12TimeLeft = 100000000000;
    up12Lv = 0;
    up12Scale = 1.8;
    up12BoostRe = 1;
    up12BoostActive = false;
    multiplierGain = 0;
    multiplierGainTest = 0.1;
    multiplierTime = 10;
    multiplierTimeTest = 8;
    multiplierGainResearchers = 0;
    multiplierGainTimeIs = 0;
    multiplierGainTimeLeft = 150;
    multiplierScale = 1.7;
    multiplierTimeResearchers = 0;
    multiplierTimeTimeIs = 0;
    multiplierTimeTimeLeft = 200;
    multiplierGainLv = 0;
    multiplierTimeLv = 0;
    rebirthGain = 0;
    rebirthGainTest = 0.1;
    rebirthTime = 10;
    rebirthTimeTest = 8;
    rebirthGainResearchers = 0;
    rebirthGainTimeIs = 0;
    rebirthGainTimeLeft = 500;
    rebirthScale = 1.9;
    rebirthTimeResearchers = 0;
    rebirthTimeTimeIs = 0;
    rebirthTimeTimeLeft = 450;
    rebirthGainLv = 0;
    rebirthTimeLv = 0;
    superRebirthGain = 0;
    superRebirthGainTest = 0.1;
    superRebirthTime = 10;
    superRebirthTimeTest = 8;
    superRebirthGainResearchers = 0;
    superRebirthGainTimeIs = 0;
    superRebirthGainTimeLeft = 900;
    superRebirthScale = 2.2;
    superRebirthTimeResearchers = 0;
    superRebirthTimeTimeIs = 0;
    superRebirthTimeTimeLeft = 920;
    superRebirthGainLv = 0;
    superRebirthTimeLv = 0;
    upgradeUnlocked = false;
    superRebirthUnlocked = false;
    megaUnlocked = false;
    up3Unlocked = false;
    up4Unlocked = false;
    up5Unlocked = false;
    up6Unlocked = false;
    up7Unlocked = false;
    up8Unlocked = false;
    up9Unlocked = false;
    researchUnlocked = false;
    re2Unlocked = false;
    re3Unlocked = false;
    re4Unlocked = false;
    re6Unlocked = false;
    re7Unlocked = false;
    re8Unlocked = false;
    re9Unlocked = false;
    re10Unlocked = false;
    re11Unlocked = false;
    re12Unlocked = false;
}
//=====(EXPORT)=====
function exportSave() {
    let saveString = localStorage.getItem("mojaGraSave");
    if (!saveString) {
        alert("There is no save to export!");
        return;
    }
    let encoded = btoa(saveString);
    document.getElementById("import-input").value = encoded;
    navigator.clipboard.writeText(encoded).then(() => {
        let alertElement = document.getElementById("export-alert");
        alertElement.className = "export-alert-visible";
        setTimeout(() => {
            alertElement.className = "export-alert-hidden";
        }, 3000);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}
//=====(IMPORT)=====
function importSave() {
    let encoded = document.getElementById("import-input").value;
    try {
        let saveString = atob(encoded); // Base64 → JSON
        JSON.parse(saveString); // sprawdź czy to poprawny JSON
        localStorage.setItem("mojaGraSave", saveString);
        location.reload();
    } catch(e) {
        alert("Wrong saving file!");
    }
}
//=====(ZMIANA MENU)=====
function changeMainTab(tabName) {
    document.getElementById('sub-menu-stats').style.display = 'none';
    document.getElementById('sub-menu-research').style.display = 'none';
    document.getElementById('sub-menu-settings').style.display = 'none';
    document.getElementById('panel-stats').style.display = 'none';
    document.getElementById('panel-research').style.display = 'none';
    document.getElementById('panel-settings').style.display = 'none';
    document.getElementById('sub-menu-' + tabName).style.display = 'flex';
    document.getElementById('panel-' + tabName).style.display = 'block';
    let buttons = document.getElementsByClassName('side-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active-main');
    }
    event.target.classList.add('active-main');
    let defaultSub = {
        'stats': 'stats',
        'research': 'researchers',
        'settings': 'settings'
    };
    changeSubTab(tabName, defaultSub[tabName]);
}
function changeSubTab(mainTabName, subTabName) {
    let currentPanel = document.getElementById('panel-' + mainTabName);
    let subPanels = currentPanel.getElementsByClassName('sub-game-panel');
    for (let i = 0; i < subPanels.length; i++) {
        subPanels[i].style.display = 'none';
    }
    document.getElementById('sub-panel-' + mainTabName + '-' + subTabName).style.display = 'block';
    let menuBar = document.getElementById('sub-menu-' + mainTabName);
    let subButtons = menuBar.getElementsByClassName('sub-btn');
    for (let i = 0; i < subButtons.length; i++) {
        subButtons[i].classList.remove('active-sub');
    }
    if (event && event.target && event.target.classList.contains('sub-btn')) {
        event.target.classList.add('active-sub');
    } else {
        subButtons[0].classList.add('active-sub');
    }

    // Pętla sprawdzająca przy przełączaniu zakładek
    let questBar = document.getElementById("quest-container");
    if (questBar) {
        if (mainTabName === 'settings' || subTabName.includes('info') || subTabName.includes('alphabet')) {
            questBar.style.display = 'none';
        } else {
            if (isQuestBarVisible) {
                questBar.style.display = 'flex';
            } else {
                questBar.style.display = 'none';
            }
        }
    }
}
//=====(MRÓGANIE)=====
function triggerBlink(elementId) {
    let element = document.getElementById(elementId);
    if (!element) return;
    element.classList.add('blink-notification');
    setTimeout(() => {
        element.classList.remove('blink-notification');
    }, 1000);
}
//=====(WŁĄCZANIE WYŁĄCZANIE PROGRESS BARU)=====
let isQuestBarVisible = true;
function toggleQuestBar() {
    let questBar = document.getElementById("quest-container");
    let toggleBtn = document.getElementById("toggle-quest-btn");
    isQuestBarVisible = !isQuestBarVisible;
    let settingsPanel = document.getElementById('panel-settings');
    let isCurrentlyInSettings = (settingsPanel && settingsPanel.style.display === 'block');

    if (isQuestBarVisible) {
        if (questBar) {
            questBar.style.display = isCurrentlyInSettings ? "none" : "flex";
        }
        if (toggleBtn) toggleBtn.innerText = "Hide Quest Bar";
        document.getElementById("progress-bar-on-off").innerText = "ON";
    } else {
        // Jeśli gracz wyłączył pasek -> zawsze "none"
        if (questBar) questBar.style.display = "none";
        if (toggleBtn) toggleBtn.innerText = "Show Quest Bar";
        document.getElementById("progress-bar-on-off").innerText = "OFF";
    }
}
//=====(FUNKCJA DO FORMATOWANIA)=====
function formatujLiczbe(n) {
    if (n === null || n === undefined || isNaN(n)) return "0";
    if (!isFinite(n)) return "∞";
    n = Number(n); // upewnij się że to liczba, nie string
    if (n < 1000) {
        return parseFloat(n.toFixed(2));
    } else if (n < 1000000) {
        return parseFloat((n / 1000).toFixed(2)) + "k";
    } else if (n < 1000000000) {
        return parseFloat((n / 1000000).toFixed(2)) + "m";
    } else {
        let wykladnik = Math.floor(Math.log10(n));
        let mantysa = parseFloat((n / Math.pow(10, wykladnik)).toFixed(2));
        return mantysa + "e" + wykladnik;
    }
}
//=====(ZAOKRONGLANIE)=====
function round(liczba) {
    return Math.round(liczba * 100) / 100;
}
//=====(KUPOWANIE PODCZAS TRZYMANIA)=====
let multiplierInterval = null;
function startAutoBuyMultiplier(e) {
    if (multiplierInterval !== null) return;
    buyMultiplier();
    multiplierInterval = setInterval(function() {
        buyMultiplier();
    }, 130);
}
function stopAutoBuyMultiplier() {
    if (multiplierInterval !== null) {
        clearInterval(multiplierInterval);
        multiplierInterval = null;
    }
}
//=====(FUNKCJE PRZYCISKÓW)=====
function buyMultiplier() {
    if (money >= 100) {
        money -= 100;
        multiplier += (rebirth + 1) * up2Boost * up3Boost * up7Boost * up1BoostRe * up11BoostRe;
        updateUI();
    }
}
//=====
function buyRebirth() {
    if (multiplier >= 100) {
        money = 0;
        let gain = round(((Math.log10(multiplier + 1.01) - 1) ** 2) * (superRebirth + 1) * up4Boost * up5Boost * up7Boost * up1BoostRe * up4BoostRe * up11BoostRe);
        if (isFinite(gain) && gain > 0) rebirth += gain;
        multiplier = 0;
        updateUI();
    }
}
//=====
function buySuperRebirth() {
    if (rebirth >= 100) {
        money = 0;
        multiplier = 0;
        let gain = round(((Math.log10(rebirth + 1.01) - 1) ** 2.2) * (mega + 1) * up6Boost * up7Boost * up8Boost * up1BoostRe * up3BoostRe * up11BoostRe);
        if (isFinite(gain) && gain > 0) superRebirth += gain;
        rebirth = 0;
        updateUI();
    }
}
//=====
function buyMega() {
    if (superRebirth >= 100) {
        money = 0;
        multiplier = 0;
        rebirth = 0;
        let gain = round(((Math.log10(superRebirth + 1.01) - 1) ** 2.3) * up9BoostRe * up10BoostRe * up11BoostRe);
        if (isFinite(gain) && gain > 0) mega += gain;
        superRebirth = 0;
        updateUI();
    }
}
//=====(AUTO KASA)=====
setInterval(() => {
    money += (multiplier + 1) * up1Boost * up7Boost * up1BoostRe * up11BoostRe;
    updateUI();
}, 100);
//=====(AUTO ZAPIS)=====
setInterval(() => {
    saveGame();
}, 5000);
//=====(UPDATE EKRANU + KROPKA)=====
setInterval(() => {
    updateGame();
    Notification();
}, 250);
//=====(WCZYTYWANIE GRY)=====
window.onload = function() {
    loadGame();
    upgrade1Active();
    upgrade2Active();
    upgrade3Active();
    upgrade4Active();
    upgrade5Active();
    upgrade6Active();
    upgrade7Active();
    upgrade8Active();
    upgrade9Active();
    upgrade10Active();
    upgrade11Active();
    upgrade12Active();
    multiplierGainAutomationActive();
    multiplierTimeAutomationActive();
    rebirthGainAutomationActive();
    rebirthTimeAutomationActive();
    superRebirthGainAutomationActive();
    superRebirthTimeAutomationActive();
    mAutoGain();
    rAutoGain();
    srAutoGain();
}
//=====(CZAS GRY)=====
setInterval(() => {
    playTime += 0.1
    updateUI();
}, 100);