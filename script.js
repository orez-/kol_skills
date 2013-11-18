//
// ==UserScript==
// @name           Orez - Format Skills
// @author         Orez
// @include        *kingdomofloathing.com/charsheet.php
// @description    Displays KoL skills more concisely.
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
        ["weasel.gif", "Thirst of the Weasel"], 
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
        ["hookspear.gif", "Harpoon!"]
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
        ["ballbat.gif", "Batter Up!"],
        ["cavalcade.gif", "Cavalcade of Fury"],
        ["northernexp.gif", "Northern Explosion"],
        ["reticle.gif", "Precision of the Penguin"],
        ["trophy.gif", "Pride of the Puffin"],
        ["bathroomscale.gif", "Holiday Weight Gain"],
        ["palmtree.gif", "Iron Palm Technique"]
      ],
      [
        ["tortpatience.gif", "Patience of the Tortoise"],
        ["headbutt.gif", "Headbutt"],
        ["skin.gif", "Skin of the Leatherback"],
        ["sympathy.gif", "Amphibian Sympathy"],
        ["ghosturtle.gif", "Ghostly Shell"],
        ["hatpants.gif", "Armorcraftiness"],
        ["snapper.gif", "Tenacity of the Snapper"],
        ["kneebutt.gif", "Kneebutt"],
        ["empathy.gif", "Empathy of the Newt"],
        ["spikyshell.gif", "Spiky Shell"],
        ["scharm.gif", "Reptilian Fortitude"],
        ["wisdom.gif", "Wisdom of the Elder Tortoises"],
        ["blackshell.gif", "Astral Shell"],
        ["blackskull.gif", "Cold-Blooded Fearlessness"],
        ["halfshell.gif", "Hero of the Half-Shell"],
        ["tao.gif", "Tao of the Terrapin"],
        ["ssnapper.gif", "Spectral Snapper"],
        ["leviatuga.gif", "Summon Leviatuga"]
      ],
      [
        ["toss.gif", "Toss"],
        ["palmtree.gif", "Spirit Vacation"],
        ["warsnapper.gif", "Blessing of the War Snapper"],
        ["stiffupperlip.gif", "Stiff Upper Lip"],
        ["pizzaslice.gif", "Pizza Lover"],
        ["shellup.gif", "Shell Up"],
        ["spiritsnap.gif", "Spirit Snap"],
        ["shewhowas.gif", "Blessing of She-Who-Was"],
        ["steel.gif", "Butts of Steel"],
        ["sayturtle.gif", "Testudinal Teachings"],
        ["simpleshield.gif", "Shieldbutt"],
        ["stormtort.gif", "Blessing of the Storm Tortoise"],
        ["calendar.gif", "The Long View"],
        ["spiritboon.gif", "Spirit Boon"],
        ["patientsmile.gif", "Patient Smile"],
        ["turtlepower.gif", "Turtle Power"],
        ["jinglebells.gif", "Jingle Bells"],
        ["turtle.gif", "Curiosity of Br'er Tarrypin"]
      ],
      [
        ["mandala.gif", "Manicotti Meditation"],
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
        ["batter2.gif", "Tempuramancy"]
      ],
      [
        ["line.gif", "Spaghetti Spear"],
        ["pizzacut.gif", "Utensil Twist"],
        ["aldente.gif", "Transcendent Al Dente"],
        ["t_vampieroghi.gif", "Bind Vampieroghi"],
        ["archedeyebrow.gif", "Arched Eyebrow of the Archmage"],
        ["t_vermincelli.gif", "Bind Vermincelli"],
        ["bringuptherear.gif", "Bringing Up the Rear"],
        ["t_wisp.gif", "Bind Angel Hair Wisp"],
        ["pastashield.gif", "Shield of the Pastalord"],
        ["t_elbowmac.gif", "Bind Undead Elbow Macaroni"],
        ["tactics.gif", "Thrall Unit Tactics"],
        ["t_dreadful.gif", "Bind Penne Dreadful"],
        ["quicktoanger.gif", "Subtle and Quick to Anger"],
        ["t_lasagmbie.gif", "Bind Lasagmbie"],
        ["wizardsquint.gif", "Wizard Squint"],
        ["t_spiceghost.gif", "Bind Spice Ghost"],
        ["candypile.gif", "Candyblast"],
        ["scharm.gif", "Stringozzi Serpent"]
      ],
      [
        ["contemplation.gif", "Sauce Contemplation"],
        ["scurse1.gif", "Curse of Vichyssoise"],
        ["saucestream.gif", "Stream of Sauce"],
        ["saucepan.gif", "Expert Panhandling"],
        ["elesphere.gif", "Elemental Saucesphere"],
        ["lovepotion.gif", "Advanced Saucecrafting"],
        ["soulsauce.gif", "Soul Saucery"],
        ["pepsphere.gif", "Jalapeño Saucesphere"],
        ["triggerfinger.gif", "Itchy Curse Finger"],
        ["pepper.gif", "Intrinsic Spiciness"],
        ["mastersaucier.gif", "Master Saucier"],
        ["saucegeyser.gif", "Saucegeyser"],
        ["5alarm.gif", "Impetuous Sauciness"],
        ["blackstench.gif", "Diminished Gag Reflex"],
        ["spunk.gif", "Irrepressible Spunk"],
        ["potion9.gif", "The Way of Sauce"],
        ["scarysauce.gif", "Scarysauce"],
        ["potion10.gif", "Deep Saucery"]
      ],
      [
        ["salsaball.gif", "Salsaball"],
        ["simmer.gif", "Simmer"],
        ["saucysalve.gif", "Saucy Salve"],
        ["icyglare.gif", "Icy Glare"],
        ["innersauce.gif", "Inner Sauce"],
        ["raincloud.gif", "Saucestorm"],
        ["scurse3.gif", "Curse of Marinara"],
        ["saucewave.gif", "Wave of Sauce"],
        ["scurse2.gif", "Curse of the Thousand Islands"],
        ["saucicle.gif", "Saucecicle"],
        ["antibiosphere.gif", "Antibiotic Saucesphere"],
        ["saucemaven.gif", "Saucemaven"],
        ["scurse4.gif", "Curse of Weaksauce"],
        ["wrysmile.gif", "Wry Smile"],
        ["saucemonocle.gif", "Sauce Monocle"],
        ["saucedrops.gif", "Blood Sugar Sauce Magic"],
        ["icingsurge.gif", "Surge of Icing"],
        ["cheesestorm.gif", "Käsesoßesturm"]
      ],
      [
        ["discoball.gif", "Disco Aerobics"],
        ["eyepoke.gif", "Disco Eye-Poke"],
        ["numberone.gif", "Overdeveloped Sense of Self Preservation"],
        ["sleepy.gif", "Disco Nap"],
        ["dance2.gif", "Disco Dance II: Electric Boogaloo"],
        ["shaker.gif", "Advanced Cocktailcrafting"],
        ["glove.gif", "Nimble Fingers"],
        ["dv_remknife.gif", "Tricky Knifework"],
        ["chest.gif", "Mad Looting Skillz"],
        ["dollarsign.gif", "Disco Greed"],
        ["discobravado.gif", "Disco Bravado"],
        ["powernap.gif", "Adventurer of Leisure"],
        ["ambidex.gif", "Ambidextrous Funkslinging"],
        ["blackwink.gif", "Heart of Polyester"],
        ["footprints.gif", "Smooth Movement"],
        ["fruitym.gif", "Superhuman Cocktailcrafting"],
        ["terrortango.gif", "Tango of Terror"],
        ["saltshaker.gif", "Salacious Cocktailcrafting"]
      ],
      [
        ["hernia.gif", "Suckerpunch"],
        ["glove.gif", "Deft Hands"],
        ["dance1.gif", "Disco Dance of Doom"],
        ["moxman.gif", "Disco State of Mind"],
        ["spiral.gif", "Frantic Gyrations"],
        ["knife.gif", "That's Not a Knife"],
        ["facestab.gif", "Disco Face Stab"],
        ["flashydancer.gif", "Flashy Dancer"],
        ["wink.gif", "Disco Smirk"],
        ["knifedark.gif", "Knife in the Dark"],
        ["irondagger.gif", "Disco Shank"],
        ["dance3.gif", "Disco Dance 3: Back in the Habit"],
        ["fire.gif", "Disco Inferno"],
        ["discomask.gif", "Disco Fever"],
        ["sensifingers.gif", "Sensitive Fingers"],
        ["discoleer.gif", "Disco Leer"],
        ["mistletoe.gif", "Stealth Mistletoe"],
        ["kungfu.gif", "Kung Fu Hustler"]
      ],
      [
        ["accordion.gif", "Moxie of the Mariachi"],
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
        ["bubblyballad.gif", "Donho's Bubbly Ballad"]
      ],
      [
        ["breath.gif", "Sing"],
        ["brokenflute.gif", "Dissonant Riff"],
        ["cadenza.gif", "Cadenza"],
        ["crabclaw.gif", "Crab Claw Technique"],
        ["acc1.gif", "Accordion Bash"],
        ["acc17.gif", "Accordion Appreciation"],
        ["cdlm.gif", "Concerto de los Muertos"],
        ["dollarsign.gif", "Five Finger Discount"],
        ["susgaze.gif", "Suspicious Gaze"],
        ["bawdyrefrain.gif", "Bawdy Refrain"],
        ["thiefeyes.gif", "Thief Among the Honorable"],
        ["stickygloves.gif", "Sticky Fingers"],
        ["zydecone.gif", "Cone of Zydeco"],
        ["moneybag.gif", "Master Accordion Master Thief"],
        ["coolsmile.gif", "Knowing Smile"],
        ["mariachimem.gif", "Mariachi Memory"],
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
