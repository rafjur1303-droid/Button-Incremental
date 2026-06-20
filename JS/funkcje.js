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
            money = decodedSave.money;
            multiplier = decodedSave.multiplier;
            rebirth = decodedSave.rebirth;
            superRebirth = decodedSave.superRebirth;
            mega = decodedSave.mega;
            up1Count = decodedSave.up1Count;
            up1Cost = decodedSave.up1Cost;
            up1Boost = decodedSave.up1Boost;
            up1Cap = decodedSave.up1Cap;
            up2Count = decodedSave.up2Count;
            up2Cost = decodedSave.up2Cost !== undefined ? decodedSave.up2Cost : 250000;
            up2Boost = decodedSave.up2Boost !== undefined ? decodedSave.up2Boost : 1;
            up2Active = decodedSave.up2Active;
            up3Count = decodedSave.up3Count;
            up3Cost = decodedSave.up3Cost !== undefined ? decodedSave.up3Cost : 250;
            up3Boost = decodedSave.up3Boost !== undefined ? decodedSave.up3Boost : 1;
            up3Cap = decodedSave.up3Cap;
            up4Count = decodedSave.up4Count;
            up4Cost = decodedSave.up4Cost !== undefined ? decodedSave.up4Cost : 4000;
            up4Boost = decodedSave.up4Boost !== undefined ? decodedSave.up4Boost : 1;
            up4Active = decodedSave.up4Active;
            playTime = decodedSave.playTime;
            up5Count = decodedSave.up5Count;
            up5Cost = decodedSave.up5Cost !== undefined ? decodedSave.up5Cost : 20;
            up5Boost = decodedSave.up5Boost !== undefined ? decodedSave.up5Boost : 1;
            up5Active = decodedSave.up5Active;
            up6Count = decodedSave.up6Count;
            up6Cost = decodedSave.up6Cost !== undefined ? decodedSave.up6Cost : 125;
            up6Boost = decodedSave.up6Boost !== undefined ? decodedSave.up6Boost : 1;
            up6Cap = decodedSave.up6Cap;
            up7Count = decodedSave.up7Count;
            up7Cost = decodedSave.up7Cost !== undefined ? decodedSave.up7Cost : 8;
            up7Boost = decodedSave.up7Boost !== undefined ? decodedSave.up7Boost : 1;
            up8Count = decodedSave.up8Count;
            up8Cost = decodedSave.up8Cost !== undefined ? decodedSave.up8Cost : 25;
            up8Boost = decodedSave.up8Boost !== undefined ? decodedSave.up8Boost : 1;
            up8Active = decodedSave.up8Active;
            up9Count = decodedSave.up9Count;
            up9Active = decodedSave.up9Active;
            up9Cost = decodedSave.up9Cost !== undefined ? decodedSave.up9Cost : 1000;
            toUpgradeVis = decodedSave.toUpgradeVis;
            up3Vis = decodedSave.up3Vis;
            up4Vis = decodedSave.up4Vis;
            up5Vis = decodedSave.up5Vis;
            up6Vis = decodedSave.up6Vis;
            up7Vis = decodedSave.up7Vis;
            up8Vis = decodedSave.up8Vis;
            up9Vis = decodedSave.up9Vis;
            SRVis = decodedSave.SRVis;
            SRUpgVis = decodedSave.SRUpgVis;
            SRStatsVis = decodedSave.SRStatsVis;
            SRMultiVis = decodedSave.SRMultiVis;
            researchVis = decodedSave.researchVis;
            upgradeBlockVis = decodedSave.upgradeBlockVis;
            upgradesStatsVis = decodedSave.upgradesStatsVis;
            upgrade3StatsVis = decodedSave.upgrade3StatsVis;
            upgrade4StatsVis = decodedSave.upgrade4StatsVis;
            upgrade5StatsVis = decodedSave.upgrade5StatsVis;
            upgrade6StatsVis = decodedSave.upgrade6StatsVis;
            upgrade7StatsVis = decodedSave.upgrade7StatsVis;
            upgrade8StatsVis = decodedSave.upgrade8StatsVis;
            upgrade9StatsVis = decodedSave.upgrade9StatsVis;
            SRAlphabetVis = decodedSave.SRAlphabetVis;
            researchers = decodedSave.researchers;
            currentResearchers = decodedSave.currentResearchers;
            researchersMoneyCost = decodedSave.researchersMoneyCost;
            researchersMultiplierCost = decodedSave.researchersMultiplierCost;
            researchersRebirthCost = decodedSave.researchersRebirthCost;
            researchersSuperRebirthCost = decodedSave.researchersSuperRebirthCost;
            researchSpeedMoneyCost = decodedSave.researchSpeedMoneyCost;
            researchSpeedMultiplierCost = decodedSave.researchSpeedMultiplierCost;
            researchSpeedRebirthCost = decodedSave.researchSpeedRebirthCost;
            researchSpeedSuperRebirthCost = decodedSave.researchSpeedSuperRebirthCost || 1;
            researchSpeedMoneyMulti = decodedSave.researchSpeedMoneyMulti || 1;
            researchSpeedMultiplierMulti = decodedSave.researchSpeedMultiplierMulti || 1;
            researchSpeedRebirthMulti = decodedSave.researchSpeedRebirthMulti || 1;
            researchSpeedSuperRebirthMulti = decodedSave.researchSpeedSuperRebirthMulti || 1;
            researchTick = decodedSave.researchTick;
            up1Researchers = decodedSave.up1Researchers;
            up1TimeIs = decodedSave.up1TimeIs;
            up1TimeLeft = decodedSave.up1TimeLeft;
            up1Lv = decodedSave.up1Lv;
            up1Scale = decodedSave.up1Scale;
            up1BoostRe = decodedSave.up1BoostRe;
            up2Researchers = decodedSave.up2Researchers;
            up2TimeIs = decodedSave.up2TimeIs;
            up2TimeLeft = decodedSave.up2TimeLeft;
            up2Lv = decodedSave.up2Lv;
            up2Scale = decodedSave.up2Scale;
            up2BoostRe = decodedSave.up2BoostRe;
            up3Researchers = decodedSave.up3Researchers;
            up3TimeIs = decodedSave.up3TimeIs;
            up3TimeLeft = decodedSave.up3TimeLeft;
            up3Lv = decodedSave.up3Lv;
            up3Scale = decodedSave.up3Scale;
            up3BoostRe = decodedSave.up3BoostRe;
            up4Researchers = decodedSave.up4Researchers;
            up4TimeIs = decodedSave.up4TimeIs;
            up4TimeLeft = decodedSave.up4TimeLeft;
            up4Lv = decodedSave.up4Lv;
            up4Scale = decodedSave.up4Scale;
            up4BoostRe = decodedSave.up4BoostRe;
            up4BoostActive = decodedSave.up4BoostActive;
            up5Researchers = decodedSave.up5Researchers;
            up5TimeIs = decodedSave.up5TimeIs;
            up5TimeLeft = decodedSave.up5TimeLeft;
            up5Lv = decodedSave.up5Lv;
            up5Scale = decodedSave.up5Scale;
            up5BoostRe = decodedSave.up5BoostRe;
            up6Researchers = decodedSave.up6Researchers;
            up6TimeIs = decodedSave.up6TimeIs;
            up6TimeLeft = decodedSave.up6TimeLeft;
            up6Lv = decodedSave.up6Lv;
            up6Scale = decodedSave.up6Scale;
            up6BoostRe = decodedSave.up6BoostRe;
            up7Researchers = decodedSave.up7Researchers;
            up7TimeIs = decodedSave.up7TimeIs;
            up7TimeLeft = decodedSave.up7TimeLeft;
            up7Lv = decodedSave.up7Lv;
            up7Scale = decodedSave.up7Scale;
            up7BoostRe = decodedSave.up7BoostRe;
            up8Researchers = decodedSave.up8Researchers;
            up8TimeIs = decodedSave.up8TimeIs;
            up8TimeLeft = decodedSave.up8TimeLeft;
            up8Lv = decodedSave.up8Lv;
            up8Scale = decodedSave.up8Scale;
            up8BoostRe = decodedSave.up8BoostRe;
            up8BoostActive = decodedSave.up8BoostActive;
            up9Researchers = decodedSave.up9Researchers;
            up9TimeIs = decodedSave.up9TimeIs;
            up9TimeLeft = decodedSave.up9TimeLeft;
            up9Lv = decodedSave.up9Lv;
            up9Scale = decodedSave.up9Scale;
            up9BoostRe = decodedSave.up9BoostRe;
            up9BoostActive = decodedSave.up9BoostActive;
            up10Researchers = decodedSave.up10Researchers;
            up10TimeIs = decodedSave.up10TimeIs;
            up10TimeLeft = decodedSave.up10TimeLeft;
            decodedSaveUp10Lv = decodedSave.up10Lv;
            up10Scale = decodedSave.up10Scale;
            up10BoostRe = decodedSave.up10BoostRe;
            up11Researchers = decodedSave.up11Researchers;
            up11TimeIs = decodedSave.up11TimeIs;
            up11TimeLeft = decodedSave.up11TimeLeft;
            up11Lv = decodedSave.up11Lv;
            up11Scale = decodedSave.up11Scale;
            up11BoostRe = decodedSave.up11BoostRe;
            up11BoostActive = decodedSave.up11BoostActive;
            up12Researchers = decodedSave.up12Researchers;
            up12TimeIs = decodedSave.up12TimeIs;
            up12TimeLeft = decodedSave.up12TimeLeft;
            up12Lv = decodedSave.up12Lv;
            up12Scale = decodedSave.up12Scale;
            up12BoostRe = decodedSave.up12BoostRe;
            up12BoostActive = decodedSave.up12BoostActive;
            multiplierGain = decodedSave.multiplierGain;
            multiplierGainTest = decodedSave.multiplierGainTest;
            multiplierTime = decodedSave.multiplierTime;
            multiplierTimeTest = decodedSave.multiplierTimeTest;
            multiplierGainResearchers = decodedSave.multiplierGainResearchers;
            multiplierGainTimeIs = decodedSave.multiplierGainTimeIs;
            multiplierGainTimeLeft = decodedSave.multiplierGainTimeLeft;
            multiplierScale = decodedSave.multiplierScale;
            multiplierTimeResearchers = decodedSave.multiplierTimeResearchers;
            multiplierTimeTimeIs = decodedSave.multiplierTimeTimeIs;
            multiplierTimeTimeLeft = decodedSave.multiplierTimeTimeLeft;
            multiplierGainLv = decodedSave.multiplierGainLv;
            multiplierTimeLv = decodedSave.multiplierTimeLv;
            rebirthGain = decodedSave.rebirthGain;
            rebirthGainTest = decodedSave.rebirthGainTest;
            rebirthTime = decodedSave.rebirthTime;
            rebirthTimeTest = decodedSave.rebirthTimeTest;
            rebirthGainResearchers = decodedSave.rebirthGainResearchers;
            rebirthGainTimeIs = decodedSave.rebirthGainTimeIs;
            rebirthGainTimeLeft = decodedSave.rebirthGainTimeLeft;
            rebirthScale = decodedSave.rebirthScale;
            rebirthTimeResearchers = decodedSave.rebirthTimeResearchers;
            rebirthTimeTimeIs = decodedSave.rebirthTimeTimeIs;
            rebirthTimeTimeLeft = decodedSave.rebirthTimeTimeLeft;
            rebirthGainLv = decodedSave.rebirthGainLv;
            rebirthTimeLv = decodedSave.rebirthTimeLv;
            superRebirthGain = decodedSave.superRebirthGain;
            superRebirthGainTest = decodedSave.superRebirthGainTest;
            superRebirthTime = decodedSave.superRebirthTime;
            superRebirthTimeTest = decodedSave.superRebirthTimeTest;
            superRebirthGainResearchers = decodedSave.superRebirthGainResearchers;
            superRebirthGainTimeIs = decodedSave.superRebirthGainTimeIs;
            superRebirthGainTimeLeft = decodedSave.superRebirthGainTimeLeft;
            superRebirthScale = decodedSave.superRebirthScale;
            superRebirthTimeResearchers = decodedSave.superRebirthTimeResearchers;
            superRebirthTimeTimeIs = decodedSave.superRebirthTimeTimeIs;
            superRebirthTimeTimeLeft = decodedSave.superRebirthTimeTimeLeft;
            superRebirthGainLv = decodedSave.superRebirthGainLv;
            superRebirthTimeLv = decodedSave.superRebirthTimeLv;
            up2ReVis = decodedSave.up2ReVis;
            up3ReVis = decodedSave.up3ReVis;
            up4ReVis = decodedSave.up4ReVis;
            up6ReVis = decodedSave.up6ReVis;
            up7ReVis = decodedSave.up7ReVis;
            up8ReVis = decodedSave.up8ReVis;
            up9ReVis = decodedSave.up9ReVis;
            up10ReVis = decodedSave.up10ReVis;
            up11ReVis = decodedSave.up11ReVis;
            up12ReVis = decodedSave.up12ReVis;
            MeVis = decodedSave.MeVis;
            rebirthAutomationVis = decodedSave.rebirthAutomationVis;
            superRebirthAutomationVis = decodedSave.superRebirthAutomationVis;

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
//=====(UPDATE EKRANU)=====
setInterval(() => {
    updateGame();
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