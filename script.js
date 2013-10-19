﻿//
// ==UserScript==
// @name           Orez - Format Skills
// @author         Orez
// @include        *kingdomofloathing.com/charsheet.php
// @description    Version 0.02
// ==/UserScript==

function q()
{
    var data = [
      [
        ["clubseal.gif", "Seal Clubbing Frenzy"],
        ["club2.gif", "Lunge Smack"], 
        ["3claws.gif", "Audacity of the Otter"],
        ["sebashield.gif", "Blubber Up"], 
        ["club.gif", "Thrust-Smack"], 
        ["hammer.gif", "Super-Advanced Meatsmithing"],
        ["eyeball.gif", "Eye of the Stoat"], 
        ["yakskin.gif", "Hide of the Walrus"], 
        ["3clawsbig.gif", "Claws of the Walrus"],
        ["tonguewalrus.gif", "Tongue of the Walrus"],
        ["cudgel.gif", "Lunging Thrust-Smack"], 
        ["reindeer.gif", "Rage of the Reindeer"],
        ["2clubs.gif", "Double-Fisted Skull Smashing"], 
        ["blackcold.gif", "Northern Exposure"],
        ["moosemusk.gif", "Musk of the Moose"],
        ["blackhammer.gif", "Pulverize"],
        ["wolfmask.gif", "Snarl of the Timberwolf"],
        ["hookspear.gif", "Harpoon!"],
        ["bathroomscale.gif", "Holiday Weight Gain"],
        ["palmtree.gif", "Iron Palm Technique"]
      ],
      [
        ["clobber.gif", "Clobber"],
        ["smallheart.gif", "Fortitude of the Muskox"],
        ["sleepy.gif", "Hibernate"],
        ["snowflake.gif", "Cold Shoulder"],
        ["dipshitfangs.gif", "Wrath of the Wolverine"],
        ["beluga.gif", "Buoyancy of the Beluga"],
        ["angry.gif", "Scowl of the Auk"],
        ["wallop.gif", "Furious Wallop"],
        ["clubfoot.gif", "Club Foot"],
        ["madcat.gif", "Seething of the Snow Leopard"],
        ["orca.gif", "Ire of the Orca"],
        ["weasel.gif", "Thirst of the Weasel"],
        ["cavalcade.gif", "Cavalcade of Fury"],
        ["northernexp.gif", "Northern Explosion"],
        ["reticle.gif", "Precision of the Penguin"],
        ["trophy.gif", "Pride of the Puffin"]
      ],
      [
        ["tortpatience.gif", "Patience of the Tortoise"],
        ["toss.gif", "Toss"],
        ["headbutt.gif", "Headbutt"],
        ["skin.gif", "Skin of the Leatherback"],
        ["sympathy.gif", "Amphibian Sympathy"],
        ["ghosturtle.gif", "Ghostly Shell"],
        ["hatpants.gif", "Armorcraftiness"],
        ["snapper.gif", "Tenacity of the Snapper"],
        ["kneebutt.gif", "Kneebutt"],
        ["empathy.gif", "Empathy of the Newt"],
        ["scharm.gif", "Reptilian Fortitude"],
        ["simpleshield.gif", "Shieldbutt"],
        ["wisdom.gif", "Wisdom of the Elder Tortoises"],
        ["blackshell.gif", "Astral Shell"],
        ["blackskull.gif", "Cold-Blooded Fearlessness"],
        ["halfshell.gif", "Hero of the Half-Shell"],
        ["tao.gif", "Tao of the Terrapin"],
        ["ssnapper.gif", "Spectral Snapper"],
        ["leviatuga.gif", "Summon Leviatuga"],
        ["jinglebells.gif", "Jingle Bells"],
        ["turtle.gif", "Curiosity of Br'er Tarrypin"]
      ],
      [
        ["mandala.gif", "Manicotti Meditation"],
        ["line.gif", "Spaghetti Spear"],
        ["ravshurikens.gif", "Ravioli Shurikens"],
        ["entnoodles.gif", "Entangling Noodles"],
        ["lasbandage.gif", "Lasagna Bandages"],
        ["pastacannon.gif", "Cannelloni Cannon"],
        ["bowl.gif", "Pastamastery"],
        ["fusilli.gif", "Springy Fusilli"],
        ["rigatoni.gif", "Spirit of Rigatoni"],
        ["stuffshell.gif", "Stuffed Mortar Shell"],
        ["ravioli.gif", "Spirit of Ravioli"],
        ["ironspoon.gif", "Weapon of the Pastalord"],
        ["string.gif", "Leash of Linguini"],
        ["coccoon.gif", "Cannelloni Cocoon"],
        ["blackfire.gif", "Tolerance of the Kitchen"],
        ["flavorofmagic.gif", "Flavour of Magic"],
        ["blacknoodles.gif", "Transcendental Noodlecraft"],
        ["fearfulfet.gif", "Fearful Fettucini"],
        ["batter2.gif", "Tempuramancy"],
        ["candypile.gif", "Candyblast"],
        ["scharm.gif", "Stringozzi Serpent"]
      ],
      [
        ["contemplation.gif", "Sauce Contemplation"],
        ["salsaball.gif", "Salsaball"],
        ["saucestream.gif", "Stream of Sauce"],
        ["saucysalve.gif", "Saucy Salve"],
        ["saucepan.gif", "Expert Panhandling"],
        ["elesphere.gif", "Elemental Saucesphere"],
        ["lovepotion.gif", "Advanced Saucecrafting"],
        ["raincloud.gif", "Saucestorm"],
        ["pepsphere.gif", "Jalapeño Saucesphere"],
        ["saucewave.gif", "Wave of Sauce"],
        ["pepper.gif", "Intrinsic Spiciness"],
        ["pepsphere2.gif", "Jabañero Saucesphere"],
        ["saucegeyser.gif", "Saucegeyser"],
        ["5alarm.gif", "Impetuous Sauciness"],
        ["blackstench.gif", "Diminished Gag Reflex"],
        ["spice.gif", "Immaculate Seasoning"],
        ["potion9.gif", "The Way of Sauce"],
        ["scarysauce.gif", "Scarysauce"],
        ["potion10.gif", "Deep Saucery"],
        ["icingsurge.gif", "Surge of Icing"],
        ["cheesestorm.gif", "Käsesoßesturm"]
      ],
      [
        ["discoball.gif", "Disco Aerobics"],
        ["hernia.gif", "Suckerpunch"],
        ["eyepoke.gif", "Disco Eye-Poke"],
        ["numberone.gif", "Overdeveloped Sense of Self Preservation"],
        ["sleepy.gif", "Disco Nap"],
        ["dance1.gif", "Disco Dance of Doom"],
        ["shaker.gif", "Advanced Cocktailcrafting"],
        ["glove.gif", "Nimble Fingers"],
        ["dance2.gif", "Disco Dance II: Electric Boogaloo"],
        ["chest.gif", "Mad Looting Skillz"],
        ["powernap.gif", "Disco Power Nap"],
        ["facestab.gif", "Disco Face Stab"],
        ["acrossbow.gif", "Disco Fever"],
        ["ambidex.gif", "Ambidextrous Funkslinging"],
        ["blackwink.gif", "Heart of Polyester"],
        ["footprints.gif", "Smooth Movement"],
        ["fruitym.gif", "Superhuman Cocktailcrafting"],
        ["terrortango.gif", "Tango of Terror"],
        ["saltshaker.gif", "Salacious Cocktailcrafting"],
        ["mistletoe.gif", "Stealth Mistletoe"],
        ["kungfu.gif", "Kung Fu Hustler"]
      ],
      [
        ["accordion.gif", "Moxie of the Mariachi"],
        ["breath.gif", "Sing"],
        ["madrigal.gif", "The Moxious Madrigal"],
        ["mojomusc.gif", "The Magical Mojomuscular Melody"],
        ["celerity.gif", "Cletus's Canticle of Celerity"],
        ["arrowsmith.gif", "The Power Ballad of the Arrowsmith"],
        ["plenty.gif", "The Polka of Plenty"],
        ["jackasses.gif", "Jackasses' Symphony of Destruction"],
        ["fatleons.gif", "Fat Leon's Phat Loot Lyric"],
        ["brawnees.gif", "Brawnee's Anthem of Absorption"],
        ["psalm.gif", "The Psalm of Pointiness"],
        ["superiority.gif", "Stevedave's Shanty of Superiority"],
        ["antiphon.gif", "Aloysius' Antiphon of Aptitude"],
        ["odetobooze.gif", "The Ode to Booze"],
        ["sonata.gif", "The Sonata of Sneakiness"],
        ["cantata.gif", "Carlweather's Cantata of Confrontation"],
        ["urkels.gif", "Ur-Kel's Aria of Annoyance"],
        ["dirge.gif", "Dirge of Dreadfulness"],
        ["bubblyballad.gif", "Donho's Bubbly Ballad"],
        ["curative.gif", "Cringle's Curative Carol"],
        ["incantation.gif", "Inigo's Incantation of Inspiration"]
      ],
      [
        ["eyesright.gif", "Powers of Observatiogn"],
        ["pocket.gif", "Gnefarious Pickpocketing"],
        ["wtee2.gif", "Torso Awaregness"],
        ["stronggnome.gif", "Gnomish Hardigness"],
        ["brainstars.gif", "Cosmic Ugnderstanding"]
      ],
      [
        ["watch.gif", "Fashionably Late"],
        ["boredeyes.gif", "Executive Narcolepsy"],
        ["mpe.gif", "Lunch Break"],
        ["wink.gif", "Offensive Joke"],
        ["necktie.gif", "Managerial Manipulation"]
      ],
      [
        ["fire.gif", "Awesome Balls of Fire"],
        ["cyclone.gif", "Snowclone"],
        ["egg.gif", "Eggsplosion"],
        ["tombstone.gif", "Raise Backup Dancer"],
        ["greasebolt.gif", "Grease Lightning"],
        ["vortex.gif", "Toynado"]
      ],
      [
        ["nickel.gif", "Natural Born Scrabbler"],
        ["dollarsign.gif", "Thrift and Grift"],
        ["breastplate.gif", "Abs of Tin"],
        ["halfcrazy.gif", "Marginally Insane"]
      ]
    ];

    var toR = "<table cellpadding='3'>";
    var text = document.body.innerHTML
    text = text.replace("<td><a on", "<td align=\"center\"><a on");
    // ^ center the unaltered skills

    for(var i=0; i<data.length; i++)
    {   // for each class
        toR += "<tr>";
        for(var j=0; j<data[i].length; j++)
        {   // for each element
            var re = "";
            re = new RegExp("<a onClick=\"javascript:poop\\(&quot;desc_skill.php\\?whichskill=(\\d+)&amp;self=true&quot;,&quot;skill&quot;, 350, 300\\)\">"+data[i][j][1]+"<\\/a>((?:(?: \\(<b>HP<\\/b>\\))|(?: \\(P\\)))?)<br>", "i");
            match = re.exec(text);  // see if you have this skill
            if(match)
            {
                color = "white";
                if(match[2] == " (<b>HP</b>)")
                    color = "blue";
                else if(match[2] == " (P)")
                    color = "#5A5A5A";
                toR += "<td style='background-color:" + color + "'>";
                toR += "<img onClick='javascript:poop(\"desc_skill.php?whichskill="+match[1]+"&self=true\",\"skill\", 350, 300)' title=\""+data[i][j][1]+"\" src='http://images.kingdomofloathing.com/itemimages/"+data[i][j][0]+"'>";
                text = text.replace(re, "");  // remove it from the list
            }
            else
                toR += "<td width=30><img title=\""+data[i][j][1]+"\" style='opacity:.5' src='http://images.kingdomofloathing.com/itemimages/bigqmark.gif'>";  // leave it blank
            toR += "</td>";
        }
        toR += "</tr>";
    }
    toR += "</table>";
    text = text.replace(/\(<b>HP<\/b>\)/g, "(<b style='color:blue'>HP</b>)");  // make the HPs blue
    text = text.replace(/<tr><td>\(P\) = Permanent skill/, "<tr><td>" + toR + "</td></tr><tr><td>(P) = Permanent skill");  // add the grid
    document.body.innerHTML = text;  // set the altered page
}

setTimeout(q, 1000);