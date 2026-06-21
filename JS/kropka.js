/**GÓRNE PRZYCISKI
toStats sub-panel-stats-stats
toUpgrade sub-panel-stats-upgrades
-
toResearchers sub-panel-research-researchers
research sub-panel-research-research
toAutomation sub-panel-research-automation
-
toSettings
statsInfo sub-panel-settings-stats-info
BOCZNE PRZYCISKI
stats-btn panel-stats
research-btn panel-research
settings-btn panel-settings
*/
function Notification(){
    if(money >= 5000 && upgradeUnlocked == false){
        upgradeUnlocked = true;
        showNotification("toUpgrade" ,"sub-panel-stats-upgrades")
        allNotification("statsInfo")
        showNotification("stats-btn" ,"panel-stats")
        showNotification("settings-btn" , "panel-settings")
    }
    if (multiplier >= 200 && up3Unlocked == false){
        up3Unlocked = true;
        showNotification("toUpgrade" ,"sub-panel-stats-upgrades")
        allNotification("statsInfo")
        showNotification("stats-btn" ,"panel-stats")
        showNotification("settings-btn" , "panel-settings")
    }
    if (rebirth >= 5 && up4Unlocked == false){
        up4Unlocked = true;
        showNotification("toUpgrade" ,"sub-panel-stats-upgrades")
        allNotification("statsInfo")
        showNotification("stats-btn" ,"panel-stats")
        showNotification("settings-btn" , "panel-settings")
    }
    if (rebirth >= 10 && up5Unlocked == false){
        up5Unlocked = true;
        showNotification("toUpgrade" ,"sub-panel-stats-upgrades")
        allNotification("statsInfo")
        showNotification("stats-btn" ,"panel-stats")
        showNotification("settings-btn" , "panel-settings")
    }
    if (superRebirth >= 1 && up6Unlocked == false){
        up6Unlocked = true;
        showNotification("toUpgrade" ,"sub-panel-stats-upgrades")
        allNotification("statsInfo")
        showNotification("stats-btn" ,"panel-stats")
        showNotification("settings-btn" , "panel-settings")
    }
    if (superRebirth >= 2 && up7Unlocked == false){
        up7Unlocked = true;
        showNotification("toUpgrade" ,"sub-panel-stats-upgrades")
        allNotification("statsInfo")
        showNotification("stats-btn" ,"panel-stats")
        showNotification("settings-btn" , "panel-settings")
    }
    if (superRebirth >= 10 && up8Unlocked == false){
        up8Unlocked = true;
        showNotification("toUpgrade" ,"sub-panel-stats-upgrades")
        allNotification("statsInfo")
        showNotification("stats-btn" ,"panel-stats")
        showNotification("settings-btn" , "panel-settings")
    }
    if (superRebirth >= 125 && up9Unlocked == false){
        up9Unlocked = true;
        showNotification("toUpgrade" ,"sub-panel-stats-upgrades")
        allNotification("statsInfo")
        showNotification("stats-btn" ,"panel-stats")
        showNotification("settings-btn" , "panel-settings")
    }
    if (rebirth >= 40 && superRebirthUnlocked == false){
        superRebirthUnlocked = true;
        showNotification("toStats" ,"sub-panel-stats-stats")
        allNotification("statsInfo")
        showNotification("stats-btn" ,"panel-stats")
        showNotification("settings-btn" , "panel-settings")
    }
    if (up9BoostActive == true && megaUnlocked == false){
        megaUnlocked = true;
        showNotification("toStats" ,"sub-panel-stats-stats")
        allNotification("statsInfo")
        showNotification("stats-btn" ,"panel-stats")
        showNotification("settings-btn" , "panel-settings")
    }
    if (up9Active == true && researchUnlocked == false){
        researchUnlocked = true;
        showNotification("research" , "sub-panel-research-research")
        showNotification("toAutomation" ,"sub-panel-research-automation")
        showNotification("research-btn" ,"panel-research")
        allNotification("statsInfo")
        showNotification("settings-btn" , "panel-settings")
    }
    if (totalResearchLv >= 2 && re2Unlocked == false){
        re2Unlocked = true;
        showNotification("research" ,"sub-panel-research-research")
        showNotification("research-btn" ,"panel-research")
        allNotification("statsInfo")
        showNotification("settings-btn" , "panel-settings")
    }
    if (totalResearchLv >= 5 && re3Unlocked == false){
        re3Unlocked = true;
        showNotification("research" ,"sub-panel-research-research")
        showNotification("research-btn" ,"panel-research")
        allNotification("statsInfo")
        showNotification("settings-btn" , "panel-settings")
    }
    if (totalResearchLv >= 11 && re4Unlocked == false){
        re4Unlocked = true;
        showNotification("research" ,"sub-panel-research-research")
        showNotification("research-btn" ,"panel-research")
        allNotification("statsInfo")
        showNotification("settings-btn" , "panel-settings")
    }
    if (totalResearchLv >= 4 && re6Unlocked == false){
        re6Unlocked = true;
        showNotification("research" ,"sub-panel-research-research")
        showNotification("research-btn" ,"panel-research")
        allNotification("statsInfo")
        showNotification("settings-btn" , "panel-settings")
    }
    if (totalResearchLv >= 7 && re7Unlocked == false){
        re7Unlocked = true;
        showNotification("research" ,"sub-panel-research-research")
        showNotification("research-btn" ,"panel-research")
        allNotification("statsInfo")
        showNotification("settings-btn" , "panel-settings")
    }
    if (totalResearchLv >= 18 && re8Unlocked == false){
        re8Unlocked = true;
        showNotification("research" ,"sub-panel-research-research")
        showNotification("research-btn" ,"panel-research")
        allNotification("statsInfo")
        showNotification("settings-btn" , "panel-settings")
    }
    if (totalResearchLv >= 10 && re9Unlocked == false){
        re9Unlocked = true;
        showNotification("research" ,"sub-panel-research-research")
        showNotification("research-btn" ,"panel-research")
        allNotification("statsInfo")
        showNotification("settings-btn" , "panel-settings")
    }
    if (totalResearchLv >= 12 && re10Unlocked == false){
        re10Unlocked = true;
        showNotification("research" ,"sub-panel-research-research")
        showNotification("research-btn" ,"panel-research")
        allNotification("statsInfo")
        showNotification("settings-btn" , "panel-settings")
    }
    if (totalResearchLv >= 16 && re11Unlocked == false){
        re11Unlocked = true;
        showNotification("research" ,"sub-panel-research-research")
        showNotification("research-btn" ,"panel-research")
        allNotification("statsInfo")
        showNotification("settings-btn" , "panel-settings")
    }
    if (totalResearchLv >= 400 && re12Unlocked == false){
        re12Unlocked = true;
        showNotification("research" ,"sub-panel-research-research")
        showNotification("research-btn" ,"panel-research")
        allNotification("statsInfo")
        showNotification("settings-btn" , "panel-settings")
    }
}