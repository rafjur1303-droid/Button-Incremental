const gameQuests = {
    1: {
        desc: "Get 100 multiplier by clicking or holding red button with this you can perform yours first rebirth(blue button)",
        check: () => {
            let progress = (multiplier / 100) * 100;
            if (rebirth > 0) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirth > 0
    },
    2: {
        desc: "Get 5000 money to unlock ???", //OPIS
        check: () => {
            let progress = (money / 5000) * 100; //PROGRESS
            if (toUpgradeVis == true) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => toUpgradeVis == true //WARUNEK UKOŃCZENIA
    },
    3: {
        desc: "BUY first upgrade for 10k money",
        check: () => {
            let progress = (money / 10000) * 100; //PROGRESS
            if (up1Count > true) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up1Count > 0
    },
    4: {
        desc: "Get 5 rebirths",
        check: () => {
            let progress = (rebirth / 5) * 100; //PROGRESS
            if (rebirth >= 5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirth >= 5
    },
    4: {
        desc: "Get 250k money and buy second upgrade for it",
        check: () => {
            let progress = (money / 250000) * 100; //PROGRESS
            if (up2Count > 0) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up2Count > 0
    },
    5: {
        desc: "Max out first upgrade",
        check: () => {
            let progress = (up1Count / 10) * 100; //PROGRESS
            if (up1Count == 10) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up1Count >= 10
    },
    6: {
        desc: "Buy third upgrade four times",
        check: () => {
            let progress = (up3Count / 4) * 100; //PROGRESS
            if (up3Count == 4) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up3Count >= 4
    },
    7: {
        desc: "Get 16 rebirths",
        check: () => {
            let progress = (rebirth / 16) * 100; //PROGRESS
            if (rebirth >= 16) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirth >= 16
    },
    8: {
        desc: "Get 4000 multiplier and buy forth upgrade",
        check: () => {
            let progress = (multiplier / 4000) * 100; //PROGRESS
            if (up4Count > 0) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up4Count > 0
    },
    9: {
        desc: "Get 20 rebirths and buy fifth upgrade",
        check: () => {
            let progress = (rebirth / 20) * 100; //PROGRESS
            if (up5Count > 0) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up5Count > 0
    },
    10: {
        desc: "Max out third upgrade",
        check: () => {
            let progress = (up3Count / 10) * 100; //PROGRESS
            if (up3Count == 10) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up3Count >= 10
    },
    11: {
        desc: "Get 40 rebirths to unlock new reset",
        check: () => {
            let progress = (rebirth / 40) * 100; //PROGRESS
            if (rebirth >= 40) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirth >= 40
    },
    12: {
        desc: "Get 100 rebirths to perform super rebirth",
        check: () => {
            let progress = (rebirth / 100) * 100; //PROGRESS
            if (superRebirth > 0) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirth > 0
    },
    13: {
        desc: "Buy sixth upgrade three times",
        check: () => {
            let progress = (up6Count / 3) * 100; //PROGRESS
            if (up6Count > 2) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up6Count > 2
    },
    14: {
        desc: "Get 4 super rebirths",
        check: () => {
            let progress = (superRebirth / 4) * 100; //PROGRESS
            if (superRebirth >= 4) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirth >= 4
    },
    15: {
        desc: "Get 8 super rebirths and buy seventh upgrade",
        check: () => {
            let progress = (superRebirth / 8) * 100; //PROGRESS
            if (up7Count > 0) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up7Count > 0
    },
    16: {
        desc: "Buy sixth upgrade ten times",
        check: () => {
            let progress = (up6Count / 10) * 100; //PROGRESS
            if (up6Count >= 10) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up6Count >= 10
    },
    17: {
        desc: "Buy seventh upgrade two times",
        check: () => {
            let progress = (up7Count / 2) * 100; //PROGRESS
            if (up7Count >= 2) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up7Count >= 2
    },
    18: {
        desc: "Get 25 super rebirths and buy eight upgrade",
        check: () => {
            let progress = (superRebirth / 25) * 100; //PROGRESS
            if (up8Count >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up8Count >= 1
    },
    19: {
        desc: "Max out sixth upgrade",
        check: () => {
            let progress = (up6Count / 25) * 100; //PROGRESS
            if (up6Count >= 25) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up6Count >= 25
    },
    20: {
        desc: "Max out seventh upgrade",
        check: () => {
            let progress = (up7Count / 5) * 100; //PROGRESS
            if (up7Count >= 5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up7Count >= 5
    },
    21: {
        desc: "Get 1000 super rebirths and buy last upgrade to unlock ???",
        check: () => {
            let progress = (superRebirth / 1000) * 100; //PROGRESS
            if (up9Count >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up9Count >= 1
    },
    22: {
        desc: "Buy the first researcher",
        check: () => {
            let progress = (researchers / 1) * 100; //PROGRESS
            if (researchers >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchers >= 1
    },
    23: {
        desc: "Buy research speed and reach x1.1",
        check: () => {
            let progress = ((researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti) - 1)  * 1000; //PROGRESS
            if (researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti >= 1.1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti >= 1.1
    },
    24: {
        desc: "Get first level on first research",
        check: () => {
            let progress = (up1TimeIs / 60) * 100; //PROGRESS
            if (up1Lv >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up1Lv >= 1
    },
    25: {
        desc: "Get first level on fifth research (the one that decrease research tick speed)",
        check: () => {
            let progress = (up5TimeIs / 120) * 100; //PROGRESS
            if (up5Lv >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up5Lv >= 1
    },
    26: {
        desc: "Get third level on first research",
        check: () => {
            let progress = (up1Lv / 3) * 100; //PROGRESS
            if (up1Lv >= 3) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up1Lv >= 3
    },
    27: {
        desc: "Get first level on second research (the one that increase upgrades cap)",
        check: () => {
            let progress = (up2TimeIs / 200) * 100; //PROGRESS
            if (up2Lv >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up2Lv >= 1
    },
    28: {
        desc: "Get 10k super rebirths",
        check: () => {
            let progress = (superRebirth / 10000) * 100; //PROGRESS
            if (superRebirth >= 10000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirth >= 10000
    },
    29: {
        desc: "Buy the fifth researcher",
        check: () => {
            let progress = (researchers / 5) * 100; //PROGRESS
            if (researchers >= 5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchers >= 5
    },
    30: {
        desc: "Buy research speed and reach x1.4",
        check: () => {
            let progress = (((researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti) - 1) / 0.4)  * 100; //PROGRESS
            if (researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 1.4) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 1.4
    },
    31: {
        desc: "Get fourth level on first research",
        check: () => {
            let progress = (up1Lv / 4) * 100; //PROGRESS
            if (up1Lv >= 4) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up1Lv >= 4
    },
    32: {
        desc: "Get second level on fifth research",
        check: () => {
            let progress = (up5Lv / 2) * 100; //PROGRESS
            if (up5Lv >= 2) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up5Lv >= 2
    },
    33: {
        desc: "Get second level on second research",
        check: () => {
            let progress = (up2Lv / 2) * 100; //PROGRESS
            if (up2Lv >= 2) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up2Lv >= 2
    },
    34: {
        desc: "Get first level on sixth research (the one that increase research speed)",
        check: () => {
            let progress = (up6TimeIs / 300) * 100; //PROGRESS
            if (up6Lv >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up6Lv >= 1
    },
    35: {
        desc: "Get first level on third research (the one that increase super rebirth by x1.2)",
        check: () => {
            let progress = (up3TimeIs / 450) * 100; //PROGRESS
            if (up3Lv >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up3Lv >= 1
    },
    36: {
        desc: "Get 25k super rebirths",
        check: () => {
            let progress = (superRebirth / 25000) * 100; //PROGRESS
            if (superRebirth >= 25000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirth >= 25000
    },
    37: {
        desc: "Buy the ninth researcher",
        check: () => {
            let progress = (researchers / 9) * 100; //PROGRESS
            if (researchers >= 9) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchers >= 9
    },
    38: {
        desc: "Buy research speed and reach x2",
        check: () => {
            let progress = ((researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti) - 1)  * 100; //PROGRESS
            if (researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 2) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 2
    },
    39: {
        desc: "Start passively gaining multiplier by increasing % from 0 to 0.1 (Automation section)",
        check: () => {
            let progress = (multiplierGain / 1) * 100; //PROGRESS
            if (multiplierGain >= 0.1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => multiplierGain >= 0.1
    },
    40: {
        desc: "Decrease multiplier cooldown to 5s",
        check: () => {
            let progress = 0 //PROGRESS
            if (multiplierTime <= 5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => multiplierTime <= 5
    },
    41: {
        desc: "Increase  % of multiplier you gain to 0.5",
        check: () => {
            let progress = 0 //PROGRESS
            if (multiplierGain >= 0.5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => multiplierGain >= 0.5
    },
    42: {
        desc: "Get sixth level on first research",
        check: () => {
            let progress = (up1Lv / 6) * 100; //PROGRESS
            if (up1Lv >= 6) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up1Lv >= 6
    },
    43: {
        desc: "Get third level on fifth research",
        check: () => {
            let progress = (up5Lv / 3) * 100; //PROGRESS
            if (up5Lv >= 3) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up5Lv >= 3
    },
    44: {
        desc: "Get third level on second research",
        check: () => {
            let progress = (up2Lv / 3) * 100; //PROGRESS
            if (up2Lv >= 3) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up2Lv >= 3
    },
    45: {
        desc: "Get first level on ninth research to unlock new reset",
        check: () => {
            let progress = (up9TimeIs / 600) * 100; //PROGRESS
            if (up9Lv >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up9Lv >= 1
    },
    46: {
        desc: "Perform yours first mega reset",
        check: () => {
            let progress = 0; //PROGRESS
            if (mega >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => mega >= 1
    },
    47: {
        desc: "Get 50 mega",
        check: () => {
            let progress = (mega / 50) * 100; //PROGRESS
            if (mega >= 50) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => mega >= 50
    },
    48: {
        desc: "Get 1m super rebirths",
        check: () => {
            let progress = (superRebirth / 1000000) * 100; //PROGRESS
            if (superRebirth >= 1000000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirth >= 1000000
    },
    49: {
        desc: "Buy the thirteenth researcher",
        check: () => {
            let progress = (researchers / 13) * 100; //PROGRESS
            if (researchers >= 13) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchers >= 13
    },
    50: {
        desc: "Buy research speed and reach x3.5",
        check: () => {
            let progress = (((researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti) - 1) / 2.5)  * 100; //PROGRESS
            if (researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 3.5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 3.5
    },
    51: {
        desc: "Increase  % of multiplier you gain to 1",
        check: () => {
            let progress = 0 //PROGRESS
            if (multiplierGain >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => multiplierGain >= 1
    },
    52: {
        desc: "Decrease multiplier cooldown to 4s",
        check: () => {
            let progress = 0 //PROGRESS
            if (multiplierTime <= 4) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => multiplierTime <= 4
    },
    53: {
        desc: "Start passively gaining rebirth by increasing % from 0 to 0.1 ",
        check: () => {
            let progress = 0; //PROGRESS
            if (rebirthGain >= 0.1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirthGain >= 0.1
    },
    54: {
        desc: "Decrease rebirth cooldown to 8s",
        check: () => {
            let progress = 0 //PROGRESS
            if (rebirthTime <= 8) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirthTime <= 8
    },
    55: {
        desc: "Get seventh level on first research",
        check: () => {
            let progress = (up1Lv / 7) * 100; //PROGRESS
            if (up1Lv >= 7) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up1Lv >= 7
    },
    56: {
        desc: "Get fourth level on second research",
        check: () => {
            let progress = (up2Lv / 4) * 100; //PROGRESS
            if (up2Lv >= 4) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up2Lv >= 4
    },
    57: {
        desc: "Get second level on third research",
        check: () => {
            let progress = (up3Lv / 2) * 100; //PROGRESS
            if (up3Lv >= 2) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up3Lv >= 2
    },
    58: {
        desc: "Get fourth level on fifth research",
        check: () => {
            let progress = (up5Lv / 4) * 100; //PROGRESS
            if (up5Lv >= 4) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up5Lv >= 4
    },
    59: {
        desc: "Get first level on seventh research(the one that increase researchers amount by +1)",
        check: () => {
            let progress = (up7TimeIs / 500) * 100; //PROGRESS
            if (up7Lv >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up7Lv >= 1
    },
    60: {
        desc: "Get second level on sixth research",
        check: () => {
            let progress = (up6Lv / 2) * 100; //PROGRESS
            if (up6Lv >= 2) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up6Lv >= 2
    },
    61: {
        desc: "Get first level on fourth research(the one that will boost rebirth by super rebirth)",
        check: () => {
            let progress = (up4TimeIs / 800) * 100; //PROGRESS
            if (up4Lv >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up4Lv >= 1
    },
    62: {
        desc: "Get 250 mega",
        check: () => {
            let progress = (mega / 250) * 100; //PROGRESS
            if (mega >= 250) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => mega >= 250
    },
    63: {
        desc: "Get 20m super rebirths",
        check: () => {
            let progress = (superRebirth / 20000000) * 100; //PROGRESS
            if (superRebirth >= 20000000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirth >= 20000000
    },
    64: {
        desc: "Buy the eighteenth researcher",
        check: () => {
            let progress = (researchers / 18) * 100; //PROGRESS
            if (researchers >= 18) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchers >= 18
    },
    65: {
        desc: "Buy research speed and reach x6",
        check: () => {
            let progress = (((researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti) - 1) / 5)  * 100; //PROGRESS
            if (researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 6) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 6
    },
    66: {
        desc: "Increase % of multiplier you gain to 5",
        check: () => {
            let progress = 0 //PROGRESS
            if (multiplierGain >= 5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => multiplierGain >= 5
    },
    67: {
        desc: "Decrease multiplier cooldown to 2s (funny number :) )",
        check: () => {
            let progress = 0 //PROGRESS
            if (multiplierTime <= 2) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => multiplierTime <= 2
    },
    68: {
        desc: "Increase % of rebirth you gain to 0.5",
        check: () => {
            let progress = 0; //PROGRESS
            if (rebirthGain >= 0.5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirthGain >= 0.5
    },
    69: {
        desc: "Decrease rebirth cooldown to 4s (another funny number :) )",
        check: () => {
            let progress = 0 //PROGRESS
            if (rebirthTime <= 4) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirthTime <= 4
    },
    70: {
        desc: "Get seventh level on second research",
        check: () => {
            let progress = (up2Lv / 7) * 100; //PROGRESS
            if (up2Lv >= 7) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up2Lv >= 7
    },
    71: {
        desc: "Get second level on fourth research",
        check: () => {
            let progress = (up4Lv / 2) * 100; //PROGRESS
            if (up4Lv >= 2) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up4Lv >= 2
    },
    72: {
        desc: "Get tenth level on first research",
        check: () => {
            let progress = (up1Lv / 10) * 100; //PROGRESS
            if (up1Lv >= 10) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up1Lv >= 10
    },
    73: {
        desc: "Get sixth level on fifth research",
        check: () => {
            let progress = (up5Lv / 6) * 100; //PROGRESS
            if (up5Lv >= 6) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up5Lv >= 6
    },
    74: {
        desc: "Get fifth level on third research",
        check: () => {
            let progress = (up3Lv / 5) * 100; //PROGRESS
            if (up3Lv >= 5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up3Lv >= 5
    },
    75: {
        desc: "Get second level on seventh research",
        check: () => {
            let progress = (up7Lv / 2) * 100; //PROGRESS
            if (up7Lv >= 2) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up7Lv >= 2
    },
    76: {
        desc: "Get first level on tenth research(the one that boost mega by x1.05)",
        check: () => {
            let progress = (up10TimeIs / 1000) * 100; //PROGRESS
            if (up10Lv >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up10Lv >= 1
    },
    77: {
        desc: "Get fifth level on sixth research",
        check: () => {
            let progress = (up6Lv / 5) * 100; //PROGRESS
            if (up6Lv >= 5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up6Lv >= 5
    },
    78: {
        desc: "Get third level on ninth research",
        check: () => {
            let progress = (up9Lv / 3) * 100; //PROGRESS
            if (up9Lv >= 3) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up9Lv >= 3
    },
    79: {
        desc: "Get first level on eighth research(the one that will boost research speed by money)",
        check: () => {
            let progress = (up8TimeIs / 1200) * 100; //PROGRESS
            if (up8Lv >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up8Lv >= 1
    },
    80: {
        desc: "Get 1000 mega",
        check: () => {
            let progress = (mega / 1000) * 100; //PROGRESS
            if (mega >= 1000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => mega >= 1000
    },
    81: {
        desc: "Get 200m super rebirths",
        check: () => {
            let progress = (superRebirth / 200000000) * 100; //PROGRESS
            if (superRebirth >= 200000000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirth >= 200000000
    },
    82: {
        desc: "Buy the twenty-fifth researcher",
        check: () => {
            let progress = (researchers / 25) * 100; //PROGRESS
            if (researchers >= 25) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchers >= 25
    },
    83: {
        desc: "Buy research speed and reach x20",
        check: () => {
            let progress = (((researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti) - 1) / 19)  * 100; //PROGRESS
            if (researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 20) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 20
    },
    84: {
        desc: "Increase % of multiplier you gain to 25",
        check: () => {
            let progress = 0 //PROGRESS
            if (multiplierGain >= 25) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => multiplierGain >= 25
    },
    85: {
        desc: "Decrease multiplier cooldown to 0.9s",
        check: () => {
            let progress = 0 //PROGRESS
            if (multiplierTime <= 0.9) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => multiplierTime <= 0.9
    },
    86: {
        desc: "Increase % of rebirth you gain to 5",
        check: () => {
            let progress = 0; //PROGRESS
            if (rebirthGain >= 5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirthGain >= 5
    },
    87: {
        desc: "Decrease rebirth cooldown to 1.5s",
        check: () => {
            let progress = 0 //PROGRESS
            if (rebirthTime <= 1.5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirthTime <= 1.5
    },
    88: {
        desc: "Start passively gaining super rebirth by increasing % from 0 to 0.1 ",
        check: () => {
            let progress = 0; //PROGRESS
            if (superRebirthGain >= 0.1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirthGain >= 0.1
    },
    89: {
        desc: "Decrease super rebirth cooldown to 3s",
        check: () => {
            let progress = 0 //PROGRESS
            if (superRebirthTime <= 3) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirthTime <= 3
    },
    90: {
        desc: "Increase % of super rebirth you gain to 1",
        check: () => {
            let progress = 0; //PROGRESS
            if (superRebirthGain >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirthGain >= 1
    },
    91: {
        desc: "Get first level on eleventh research(the one that will boost all stats by mega)",
        check: () => {
            let progress = (up11TimeIs / 2400) * 100; //PROGRESS
            if (up11Lv >= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up11Lv >= 1
    },
    92: {
        desc: "Get twelfth level on second research",
        check: () => {
            let progress = (up2Lv / 12) * 100; //PROGRESS
            if (up2Lv >= 12) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up2Lv >= 12
    },
    93: {
        desc: "Get eleventh level on fifth research",
        check: () => {
            let progress = (up5Lv / 11) * 100; //PROGRESS
            if (up5Lv >= 11) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up5Lv >= 11
    },
    94: {
        desc: "Get tenth level on tenth research",
        check: () => {
            let progress = (up10Lv / 10) * 100; //PROGRESS
            if (up10Lv >= 10) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up10Lv >= 10
    },
    95: {
        desc: "Get tenth level on third research",
        check: () => {
            let progress = (up3Lv / 10) * 100; //PROGRESS
            if (up3Lv >= 10) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up3Lv >= 10
    },
    96: {
        desc: "Get tenth level on sixth research",
        check: () => {
            let progress = (up6Lv / 10) * 100; //PROGRESS
            if (up6Lv >= 10) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up6Lv >= 10
    },
    97: {
        desc: "Get eighth level on ninth research",
        check: () => {
            let progress = (up9Lv / 8) * 100; //PROGRESS
            if (up9Lv >= 8) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up9Lv >= 8
    },
    98: {
        desc: "Get fifteenth level on first research",
        check: () => {
            let progress = (up1Lv / 15) * 100; //PROGRESS
            if (up1Lv >= 15) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up1Lv >= 15
    },
    99: {
        desc: "Get sixth level on fourth research",
        check: () => {
            let progress = (up4Lv / 6) * 100; //PROGRESS
            if (up4Lv >= 6) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up4Lv >= 6
    },
    100: {
        desc: "Get fifth level on eighth research",
        check: () => {
            let progress = (up8Lv / 5) * 100; //PROGRESS
            if (up8Lv >= 5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up8Lv >= 5
    },
    101: {
        desc: "Get fifth level on eleventh research",
        check: () => {
            let progress = (up11Lv / 5) * 100; //PROGRESS
            if (up11Lv >= 5) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up11Lv >= 5
    },
    102: {
        desc: "Get sixth level on seventh research",
        check: () => {
            let progress = (up7Lv / 6) * 100; //PROGRESS
            if (up7Lv >= 6) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up7Lv >= 6
    },
    103: {
        desc: "Get in total 120 research lv",
        check: () => {
            let progress = (totalResearchLv / 120) * 100; //PROGRESS
            if (totalResearchLv >= 120) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 120
    },
    104: {
        desc: "Get in total 130 research lv",
        check: () => {
            let progress = (totalResearchLv / 130) * 100; //PROGRESS
            if (totalResearchLv >= 130) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 130
    },
    105: {
        desc: "Get 25k mega",
        check: () => {
            let progress = (mega / 25000) * 100; //PROGRESS
            if (mega >= 25000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => mega >= 25000
    },
    106: {
        desc: "Get 1e12 super rebirths",
        check: () => {
            let progress = (superRebirth / 1000000000000) * 100; //PROGRESS
            if (superRebirth >= 1000000000000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirth >= 1000000000000
    },
    107: {
        desc: "Buy the forty-third researcher",
        check: () => {
            let progress = (researchers / 43) * 100; //PROGRESS
            if (researchers >= 43) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchers >= 43
    },
    108: {
        desc: "Buy research speed and reach x300",
        check: () => {
            let progress = (((researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti) - 1) / 299)  * 100; //PROGRESS
            if (researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 300) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 300
    },
    109: {
        desc: "Increase % of multiplier you gain to 100 (its the most you can get)",
        check: () => {
            let progress = 0 //PROGRESS
            if (multiplierGain >= 100) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => multiplierGain >= 100
    },
    110: {
        desc: "Decrease multiplier cooldown to 0.5s (its the lest you can get yours fingers can finnaly rest)",
        check: () => {
            let progress = 0 //PROGRESS
            if (multiplierTime <= 0.55) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => multiplierTime <= 0.55
    },
    111: {
        desc: "Increase % of rebirth you gain to 40",
        check: () => {
            let progress = 0; //PROGRESS
            if (rebirthGain >= 40) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirthGain >= 40
    },
    112: {
        desc: "Decrease rebirth cooldown to 0.7s",
        check: () => {
            let progress = 0 //PROGRESS
            if (rebirthTime <= 0.75) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirthTime <= 0.75
    },
    113: {
        desc: "Increase % of super rebirth you gain to 20",
        check: () => {
            let progress = 0; //PROGRESS
            if (superRebirthGain >= 20) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirthGain >= 20
    },
    114: {
        desc: "Decrease super rebirth cooldown to 1s",
        check: () => {
            let progress = 0 //PROGRESS
            if (superRebirthTime <= 1) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirthTime <= 1
    },
    115: {
        desc: "Get in total 167 research lv",
        check: () => {
            let progress = (totalResearchLv / 167) * 100; //PROGRESS
            if (totalResearchLv >= 167) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 167
    },
    116: {
        desc: "Get in total 175 research lv",
        check: () => {
            let progress = (totalResearchLv / 175) * 100; //PROGRESS
            if (totalResearchLv >= 175) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 175
    },
    117: {
        desc: "Get in total 190 research lv",
        check: () => {
            let progress = (totalResearchLv / 190) * 100; //PROGRESS
            if (totalResearchLv >= 190) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 190
    },
    118: {
        desc: "Get 200k mega",
        check: () => {
            let progress = (mega / 200000) * 100; //PROGRESS
            if (mega >= 200000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => mega >= 200000
    },
    119: {
        desc: "Get 5e14 super rebirths",
        check: () => {
            let progress = (superRebirth / 500000000000000) * 100; //PROGRESS
            if (superRebirth >= 500000000000000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirth >= 500000000000000
    },
    120: {
        desc: "Buy the sixty researcher",
        check: () => {
            let progress = (researchers / 60) * 100; //PROGRESS
            if (researchers >= 60) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchers >= 60
    },
    121: {
        desc: "Buy research speed and reach x2500",
        check: () => {
            let progress = (((researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti) - 1) / 2499)  * 100; //PROGRESS
            if (researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 2500) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 2500
    },
    122: {
        desc: "Increase % of rebirth you gain to 100",
        check: () => {
            let progress = 0; //PROGRESS
            if (rebirthGain >= 100) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirthGain >= 100
    },
    123: {
        desc: "Decrease rebirth cooldown to 0.5s",
        check: () => {
            let progress = 0 //PROGRESS
            if (rebirthTime <= 0.55) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => rebirthTime <= 0.55
    },
    124: {
        desc: "Increase % of super rebirth you gain to 50",
        check: () => {
            let progress = 0; //PROGRESS
            if (superRebirthGain >= 50) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirthGain >= 50
    },
    125: {
        desc: "Decrease super rebirth cooldown to 0.6s",
        check: () => {
            let progress = 0 //PROGRESS
            if (superRebirthTime <= 0.65) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirthTime <= 0.65
    },
    126: {
        desc: "Get in total 210 research lv",
        check: () => {
            let progress = (totalResearchLv / 210) * 100; //PROGRESS
            if (totalResearchLv >= 210) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 210
    },
    127: {
        desc: "Get in total 220 research lv",
        check: () => {
            let progress = (totalResearchLv / 220) * 100; //PROGRESS
            if (totalResearchLv >= 220) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 220
    },
    128: {
        desc: "Get in total 235 research lv",
        check: () => {
            let progress = (totalResearchLv / 235) * 100; //PROGRESS
            if (totalResearchLv >= 235) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 235
    },
    129: {
        desc: "Get in total 250 research lv",
        check: () => {
            let progress = (totalResearchLv / 250) * 100; //PROGRESS
            if (totalResearchLv >= 250) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 250
    },
    130: {
        desc: "Get in total 260 research lv",
        check: () => {
            let progress = (totalResearchLv / 260) * 100; //PROGRESS
            if (totalResearchLv >= 260) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 260
    },
    131: {
        desc: "Get 1m mega",
        check: () => {
            let progress = (mega / 1000000) * 100; //PROGRESS
            if (mega >= 1000000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => mega >= 1000000
    },
    132: {
        desc: "Get 1e17 super rebirths",
        check: () => {
            let progress = (superRebirth / 100000000000000000) * 100; //PROGRESS
            if (superRebirth >= 100000000000000000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirth >= 100000000000000000
    },
    133: {
        desc: "Buy the seventy-fifth researcher",
        check: () => {
            let progress = (researchers / 75) * 100; //PROGRESS
            if (researchers >= 75) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchers >= 75
    },
    134: {
        desc: "Buy research speed and reach x25k",
        check: () => {
            let progress = (((researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti) - 1) / 24999)  * 100; //PROGRESS
            if (researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 25000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 25000
    },
    135: {
        desc: "Increase % of super rebirth you gain to 100",
        check: () => {
            let progress = 0; //PROGRESS
            if (superRebirthGain >= 100) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirthGain >= 100
    },
    136: {
        desc: "Decrease super rebirth cooldown to 0.5s",
        check: () => {
            let progress = 0 //PROGRESS
            if (superRebirthTime <= 0.55) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => superRebirthTime <= 0.55
    },
    137: {
        desc: "Get in total 280 research lv",
        check: () => {
            let progress = (totalResearchLv / 280) * 100; //PROGRESS
            if (totalResearchLv >= 280) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 280
    },
    138: {
        desc: "Get in total 300 research lv",
        check: () => {
            let progress = (totalResearchLv / 300) * 100; //PROGRESS
            if (totalResearchLv >= 300) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 300
    },
    139: {
        desc: "Get in total 315 research lv",
        check: () => {
            let progress = (totalResearchLv / 315) * 100; //PROGRESS
            if (totalResearchLv >= 315) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 315
    },
    140: {
        desc: "Get in total 330 research lv",
        check: () => {
            let progress = (totalResearchLv / 330) * 100; //PROGRESS
            if (totalResearchLv >= 330) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 330
    },
    141: {
        desc: "Get 25m mega",
        check: () => {
            let progress = (mega / 25000000) * 100; //PROGRESS
            if (mega >= 25000000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => mega >= 25000000
    },
    142: {
        desc: "Buy the ninety researcher",
        check: () => {
            let progress = (researchers / 75) * 100; //PROGRESS
            if (researchers >= 75) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchers >= 75
    },
    143: {
        desc: "Buy research speed and reach x300k",
        check: () => {
            let progress = (((researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti) - 1) / 299999)  * 100; //PROGRESS
            if (researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 300000) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => researchSpeedMoneyMulti * researchSpeedMultiplierMulti * researchSpeedRebirthMulti * researchSpeedSuperRebirthMulti * researchSpeedUpgradesMulti >= 300000
    },
    144: {
        desc: "Get in total 350 research lv",
        check: () => {
            let progress = (totalResearchLv / 350) * 100; //PROGRESS
            if (totalResearchLv >= 350) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 350
    },
    145: {
        desc: "Get in total 365 research lv",
        check: () => {
            let progress = (totalResearchLv / 365) * 100; //PROGRESS
            if (totalResearchLv >= 365) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 365
    },
    146: {
        desc: "Get in total 400 research lv to unlock new research",
        check: () => {
            let progress = (totalResearchLv / 400) * 100; //PROGRESS
            if (totalResearchLv >= 400) progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => totalResearchLv >= 400
    },
    147: {
        desc: "Research last research",
        check: () => {
            let progress = (up12TimeIs / 100000000000) * 100; //PROGRESS
            if (up12Lv == "MAX") progress = 100;
            return Math.min(100, Math.max(0, progress));
        },
        isDone: () => up12Lv >= "MAX"
    },
};
function updateQuestProgressBar() {
    let quest = gameQuests[currentQuestLv];

//=====(KONIEC GRY)=====
    if (!quest) {
        let levelText = document.getElementById("quest-level-text");
        let descText = document.getElementById("quest-desc-text");
        let bar = document.getElementById("quest-progress-bar");
        let percentText = document.getElementById("quest-percent-text");
        if (levelText) levelText.innerText = "MAX";
        if (descText) descText.innerText = "YOU FINISH ALL CURRENT CONTENT WELL DONE!";
        if (bar) bar.style.width = "100%";
        if (percentText) percentText.innerText = "100%";
        return;
    }
    let currentPercent = Math.floor(quest.check());
    let levelElement = document.getElementById("quest-level-text");
    let descElement = document.getElementById("quest-desc-text");
    let barElement = document.getElementById("quest-progress-bar");
    let percentElement = document.getElementById("quest-percent-text");

    if (levelElement) levelElement.innerText = "Milestone " + currentQuestLv;
    if (descElement) descElement.innerText = quest.desc;
    if (barElement) barElement.style.width = currentPercent + "%";
    if (percentElement) percentElement.innerText = currentPercent + "%";
    if (quest.isDone()) {
        triggerBlink('quest-container');
        currentQuestLv++;
    }
}