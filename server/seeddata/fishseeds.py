from models import FreshwaterFish

fishseed = [
    FreshwaterFish(
        common_name="Betta fish",
        scientific_name="Betta splendens",
        bio="Betta fish (Betta splendens), also known as Siamese fighting fish, are one of the most popular freshwater aquarium fish worldwide. Originating from Southeast Asia, Betta fish are renowned for their vibrant colors, flowing fins, and unique personalities. These beautiful fish come in a wide variety of colors and fin types, ranging from brilliant reds and blues to iridescent greens and purples. Betta fish are labyrinth fish, meaning they have a specialized organ called a labyrinth organ that allows them to breathe air directly from the surface. This adaptation enables them to thrive in oxygen-deprived waters such as stagnant ponds and rice paddies. In the aquarium, Betta fish thrive in warm, still waters and prefer densely planted tanks with plenty of hiding spots. They are generally solitary and territorial, especially males, so it's essential to provide each fish with its own space to prevent aggression. Betta fish are relatively easy to care for and can adapt to a wide range of water parameters. They prefer slightly acidic to neutral water with a pH range of 6.5 to 7.5 and a temperature between 75°F to 80°F. With proper care and attention, Betta fish can live for several years and bring joy and beauty to any aquarium.",
        origin="Southeast Asia",
        care_level="Easy",
        max_size=3,  # Inches
        ph_range="6.5 - 7.5",
        bioload=2,
        image="/static/betta.jpg"
    ),
    FreshwaterFish(
        common_name="Neon tetra",
        scientific_name="Paracheirodon innesi",
        bio="Neon tetras (Paracheirodon innesi) are small, vibrant freshwater fish native to South America. Known for their stunning iridescent blue and red colors, neon tetras are a popular choice for community aquariums. These peaceful fish are schooling species, so they thrive in groups of six or more. In the wild, neon tetras inhabit slow-moving, heavily vegetated waters, so they prefer aquariums with plenty of plants and hiding spots. Neon tetras are relatively hardy and can adapt to a wide range of water conditions, although they prefer slightly acidic to neutral water with a pH range of 6.0 to 7.5. They are omnivorous and will readily accept a variety of flake, pellet, and frozen foods. Neon tetras are generally easy to care for and make an excellent choice for beginner aquarists.",
        origin="South America",
        care_level="Easy",
        max_size=1.5,  # Inches
        ph_range="6.0 - 7.5",
        bioload=1,
        image="/static/neon_tetra.jpg"
    ),
    FreshwaterFish(
        common_name="Guppy",
        scientific_name="Poecilia reticulata",
        bio="Guppies (Poecilia reticulata) are small, colorful freshwater fish native to South America. They are widely popular among aquarium enthusiasts due to their vibrant colors, lively personalities, and ease of care. Guppies come in a wide range of colors and tail patterns, making them a favorite choice for breeding enthusiasts. These livebearers are known for their prolific breeding habits, so a single pair can quickly populate a well-planted aquarium. Guppies are hardy and adaptable, tolerating a wide range of water parameters. They prefer slightly alkaline to neutral water with a pH range of 7.0 to 8.0. Guppies are omnivorous and will eat a variety of foods, including flakes, pellets, and live or frozen foods. With proper care, guppies can live for several years and provide endless entertainment with their active behavior and vibrant colors.",
        origin="South America",
        care_level="Easy",
        max_size=2.5,  # Inches
        ph_range="7.0 - 8.0",
        bioload=2.5,
        image="/static/guppy.jpg"
    ),
    FreshwaterFish(
        common_name="Goldfish",
        scientific_name="Carassius auratus",
        bio="Goldfish (Carassius auratus) are one of the most recognizable and beloved freshwater aquarium fish worldwide. Originating from East Asia, goldfish have been domesticated for thousands of years and come in a wide variety of colors, shapes, and sizes. These hardy fish are well-suited to aquarium life and can thrive in a range of conditions. However, they are often misunderstood as low-maintenance pets and require proper care to live long, healthy lives. Goldfish produce a significant amount of waste, so they require spacious tanks with efficient filtration systems to maintain water quality. They prefer cooler water temperatures between 65°F to 75°F and do best in tanks with plenty of space to swim and explore. Goldfish are omnivorous and will eat a varied diet of flakes, pellets, and fresh vegetables. With proper care and attention, goldfish can live for decades and become cherished members of the family.",
        origin="East Asia",
        care_level="Moderate",
        max_size=12,  # Inches
        ph_range="6.0 - 8.0",
        bioload=12,
        image="/static/goldfish.jpg"
    ),
    FreshwaterFish(
        common_name="Angelfish",
        scientific_name="Pterophyllum scalare",
        bio="Angelfish (Pterophyllum scalare) are graceful and elegant freshwater fish native to South America. Known for their distinctive triangular shape and flowing fins, angelfish are a popular choice for medium to large-sized aquariums. They come in a variety of color variations, including silver, black, and marble patterns. Angelfish are relatively peaceful but can become territorial during breeding or if kept in crowded conditions. They prefer tall tanks with plenty of vertical swimming space and sheltered areas to hide. Angelfish are omnivorous and will accept a variety of foods, including flakes, pellets, and live or frozen foods. They prefer slightly acidic to neutral water with a pH range of 6.5 to 7.5 and a temperature between 75°F to 82°F. With proper care, angelfish can live for several years and become prized specimens in the aquarium.",
        origin="South America",
        care_level="Moderate",
        max_size=6,  # Inches
        ph_range="6.5 - 7.5",
        bioload=6,
        image="/static/angelfish.jpg"
    ),
    FreshwaterFish(
        common_name="Zebra danio",
        scientific_name="Danio rerio",
        bio="Zebra danios (Danio rerio) are small, active freshwater fish native to South Asia. They are popular among beginner aquarists for their hardiness, adaptability, and schooling behavior. Zebra danios are named for their distinctive zebra-like stripes, which run horizontally along their slender bodies. They are active swimmers and should be kept in groups of six or more to prevent stress. Zebra danios are well-suited to a wide range of aquarium setups and can thrive in both tropical and temperate environments. They prefer well-oxygenated water with a gentle current and appreciate plenty of open swimming space. Zebra danios are omnivorous and will eat a variety of foods, including flakes, pellets, and live or frozen foods. They are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly alkaline to neutral water with a pH range of 6.5 to 7.5.",
        origin="South Asia",
        care_level="Easy",
        max_size=2,  # Inches
        ph_range="6.5 - 7.5",
        bioload=2,
        image="/static/zebra_danio.jpeg"
    ),
    FreshwaterFish(
        common_name="Platy",
        scientific_name="Xiphophorus spp.",
        bio="Platies (Xiphophorus spp.) are colorful and active freshwater fish native to Central America. They are popular among beginner aquarists for their vibrant colors, peaceful nature, and ease of care. Platies come in a wide range of colors and patterns, including red, blue, orange, and calico varieties. They are livebearers, meaning they give birth to fully-formed young instead of laying eggs. Platies are social fish and thrive in groups, so it's best to keep them in pairs or small schools. They prefer well-aerated water with plenty of vegetation and hiding spots to explore. Platies are omnivorous and will eat a varied diet of flake, pellet, and live or frozen foods. They are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly alkaline to neutral water with a pH range of 7.0 to 8.0.",
        origin="Central America",
        care_level="Easy",
        max_size=2.5,  # Inches
        ph_range="7.0 - 8.0",
        bioload=3,
        image="/static/platys.jpg"
    ),
    FreshwaterFish(
        common_name="Swordtail",
        scientific_name="Xiphophorus hellerii",
        bio="Swordtails (Xiphophorus hellerii) are colorful and lively freshwater fish native to Central America. They are popular among aquarium enthusiasts for their striking colors, unique sword-shaped tails, and active behavior. Swordtails come in a variety of colors and patterns, including red, orange, yellow, and black varieties. They are livebearers, meaning they give birth to fully-formed young instead of laying eggs. Swordtails are social fish and thrive in groups, so it's best to keep them in pairs or small schools. They prefer well-aerated water with plenty of swimming space and vegetation to explore. Swordtails are omnivorous and will eat a varied diet of flake, pellet, and live or frozen foods. They are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly alkaline to neutral water with a pH range of 7.0 to 8.0.",
        origin="Central America",
        care_level="Easy",
        max_size=4,  # Inches
        ph_range="7.0 - 8.0",
        bioload=4,
        image="/static/swordtail.jpeg"
    ),
    FreshwaterFish(
        common_name="Discus fish",
        scientific_name="Symphysodon spp.",
        bio="Discus fish (Symphysodon spp.) are iconic and prized freshwater fish native to the Amazon basin in South America. Known for their vibrant colors, circular shape, and intricate patterns, discus fish are often referred to as the 'king of the aquarium.' They come in a wide range of color variations, including red, blue, green, and spotted patterns. Discus fish are social creatures and should be kept in groups of six or more to thrive. They prefer warm, soft, and slightly acidic water conditions similar to their native habitat. Discus fish require pristine water quality, so regular water changes and diligent maintenance are essential. They are omnivorous and will accept a varied diet of high-quality flakes, pellets, and frozen foods. Discus fish are relatively sensitive to changes in water parameters and require an experienced aquarist to provide proper care.",
        origin="South America",
        care_level="Advanced",
        max_size=8,  # Inches
        ph_range="6.0 - 7.0",
        bioload=12,
        image="/static/discus.jpg"
    ),
    FreshwaterFish(
        common_name="Cherry barb",
        scientific_name="Puntius titteya",
        bio="Cherry barbs (Puntius titteya) are colorful and peaceful freshwater fish native to Sri Lanka. They are popular among aquarium enthusiasts for their vibrant colors, active behavior, and ease of care. Cherry barbs are named for their bright red coloration, which intensifies during mating displays. They are schooling fish and should be kept in groups of six or more to prevent stress and aggression. Cherry barbs are relatively hardy and can adapt to a wide range of water parameters. They prefer slightly acidic to neutral water with a pH range of 6.0 to 7.5 and a temperature between 72°F to 82°F. Cherry barbs are omnivorous and will accept a variety of foods, including flakes, pellets, and live or frozen foods. With proper care, cherry barbs can live for several years and become cherished members of the community aquarium.",
        origin="Sri Lanka",
        care_level="Easy",
        max_size=2,  # Inches
        ph_range="6.0 - 7.5",
        bioload=2.5,
        image="/static/cherry_barb.jpg"
    ),
    FreshwaterFish(
        common_name="Tiger barb",
        scientific_name="Puntigrus tetrazona",
        bio="Tiger barbs (Puntigrus tetrazona) are energetic and lively freshwater fish native to Southeast Asia. Known for their distinctive black stripes and vibrant orange-red coloration, tiger barbs are a popular choice for community aquariums. They are schooling fish and should be kept in groups of six or more to prevent stress and aggression. Tiger barbs are relatively hardy and can adapt to a wide range of water parameters. They prefer slightly acidic to neutral water with a pH range of 6.0 to 7.5 and a temperature between 72°F to 78°F. Tiger barbs are omnivorous and will accept a variety of foods, including flakes, pellets, and live or frozen foods. With proper care and attention, tiger barbs can live for several years and provide endless entertainment with their active behavior and playful antics.",
        origin="Southeast Asia",
        care_level="Easy",
        max_size=3,  # Inches
        ph_range="6.0 - 7.5",
        bioload=3,
        image="/static/tiger_barb.jpeg"
    ),
    FreshwaterFish(
        common_name="Harlequin rasbora",
        scientific_name="Trigonostigma heteromorpha",
        bio="Harlequin rasboras (Trigonostigma heteromorpha) are peaceful and attractive freshwater fish native to Southeast Asia. Known for their striking colors and distinctive black triangular patch, harlequin rasboras are a popular choice for community aquariums. They are schooling fish and should be kept in groups of six or more to prevent stress and aggression. Harlequin rasboras are relatively hardy and can adapt to a wide range of water parameters. They prefer slightly acidic to neutral water with a pH range of 6.0 to 7.5 and a temperature between 72°F to 78°F. Harlequin rasboras are omnivorous and will accept a variety of foods, including flakes, pellets, and live or frozen foods. With their peaceful nature and vibrant colors, harlequin rasboras make an excellent addition to any community aquarium.",
        origin="Southeast Asia",
        care_level="Easy",
        max_size=2,  # Inches
        ph_range="6.0 - 7.5",
        bioload=2.5,
        image="/static/harlequin_rasbora.jpeg"
    ),
    FreshwaterFish(
        common_name="Kuhli loach",
        scientific_name="Pangio kuhlii",
        bio="Kuhli loaches (Pangio kuhlii) are unique and fascinating freshwater fish native to Southeast Asia. Known for their eel-like appearance and nocturnal behavior, Kuhli loaches are a popular choice for aquarists seeking an unusual addition to their tank. They have elongated bodies with alternating black and orange stripes, allowing them to blend seamlessly into their surroundings. Kuhli loaches are shy and reclusive by nature, preferring to hide among plants, rocks, and driftwood during the day. They are peaceful fish and should be kept in groups of five or more to prevent stress. Kuhli loaches are relatively hardy and can adapt to a wide range of water parameters. They prefer soft, acidic water with a pH range of 6.0 to 7.0 and a temperature between 75°F to 82°F. Kuhli loaches are omnivorous and will accept a variety of sinking pellets, flakes, and frozen foods. With their unique appearance and interesting behavior, Kuhli loaches make a captivating addition to any freshwater aquarium.",
        origin="Southeast Asia",
        care_level="Intermediate",
        max_size=4,  # Inches
        ph_range="6.0 - 7.0",
        bioload=2,
        image="/static/kuhli_loach.jpg"
    ),
    FreshwaterFish(
        common_name="Rainbow fish",
        scientific_name="Melanotaenia spp.",
        bio="Rainbow fish (Melanotaenia spp.) are vibrant and colorful freshwater fish native to Australia and New Guinea. They are popular among aquarium enthusiasts for their dazzling colors, active behavior, and peaceful temperament. Rainbow fish come in a variety of species and color variations, including red, blue, green, and yellow hues. They are schooling fish and should be kept in groups of six or more to prevent stress and aggression. Rainbow fish prefer well-oxygenated water with plenty of swimming space and areas to explore. They are relatively hardy and can adapt to a wide range of water parameters. Rainbow fish are omnivorous and will accept a varied diet of flakes, pellets, and live or frozen foods. With their vibrant colors and active behavior, rainbow fish make an excellent addition to any community aquarium.",
        origin="Australia, New Guinea",
        care_level="Easy",
        max_size=5,  # Inches
        ph_range="6.5 - 7.5",
        bioload=4,
        image="/static/rainbow_fish.jpeg"
    ),
    FreshwaterFish(
        common_name="Clown loach",
        scientific_name="Chromobotia macracanthus",
        bio="Clown loaches (Chromobotia macracanthus) are colorful and entertaining freshwater fish native to Southeast Asia. Known for their distinctive orange and black stripes, clown loaches are a popular choice for larger community aquariums. They have a playful and curious nature, often exploring their surroundings and interacting with tank mates. Clown loaches are social fish and should be kept in groups of three or more to prevent stress. They prefer well-oxygenated water with plenty of swimming space and hiding spots to explore. Clown loaches are omnivorous and will accept a variety of foods, including sinking pellets, flakes, and live or frozen foods. They are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly acidic to neutral water with a pH range of 6.0 to 7.5. With their vibrant colors and playful behavior, clown loaches add a lively touch to any freshwater aquarium.",
        origin="Southeast Asia",
        care_level="Moderate",
        max_size=12,  # Inches
        ph_range="6.0 - 7.5",
        bioload=12,
        image="/static/clown_loach.jpeg"
    ),      
    FreshwaterFish(
        common_name="Bristlenose pleco",
        scientific_name="Ancistrus spp.",
        bio="Bristlenose plecos (Ancistrus spp.) are distinctive and beneficial freshwater fish native to South America. Known for their unique appearance and algae-eating abilities, bristlenose plecos are a popular choice for community aquariums. They have a flattened body covered in armor-like plates and distinctive tentacle-like structures (bristles) on their snouts, giving them their name. Bristlenose plecos are peaceful and hardy fish, making them suitable for beginner and experienced aquarists alike. They are excellent algae eaters and help keep the aquarium clean by grazing on algae-covered surfaces. Bristlenose plecos prefer well-oxygenated water with plenty of hiding spots and crevices to explore. They are omnivorous and will accept a variety of foods, including sinking pellets, algae wafers, and fresh vegetables. Bristlenose plecos are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly acidic to neutral water with a pH range of 6.5 to 7.5.",
        origin="South America",
        care_level="Easy",
        max_size=6,  # Inches
        ph_range="6.5 - 7.5",
        bioload=2,
        image="/static/bristlenose.jpeg"
    ),
    FreshwaterFish(
        common_name="Pearl gourami",
        scientific_name="Trichopodus leerii",
        bio="Pearl gouramis (Trichopodus leerii) are elegant and peaceful freshwater fish native to Southeast Asia. Known for their iridescent scales and graceful movements, pearl gouramis are a popular choice for community aquariums. They have a distinctive pearl-like pattern on their scales, which shimmers in the light and gives them their name. Pearl gouramis are social fish and should be kept in pairs or small groups to prevent stress. They prefer well-planted tanks with plenty of floating vegetation and subdued lighting. Pearl gouramis are labyrinth fish, meaning they have a specialized organ called a labyrinth organ that allows them to breathe air directly from the surface. This adaptation enables them to thrive in oxygen-deprived waters such as stagnant ponds and swamps. With their peaceful nature and striking appearance, pearl gouramis make a captivating addition to any freshwater aquarium.",
        origin="Southeast Asia",
        care_level="Easy",
        max_size=5,  # Inches
        ph_range="6.0 - 7.5",
        bioload=3,
        image="/static/pearl_gourami.jpg"
    ),
    FreshwaterFish(
        common_name="Rosy barb",
        scientific_name="Pethia conchonius",
        bio="Rosy barbs (Pethia conchonius) are colorful and active freshwater fish native to India, Nepal, and Bangladesh. They are prized for their vibrant colors, peaceful nature, and energetic behavior, making them popular choices for community aquariums. Rosy barbs have a distinctive red-orange coloration with black markings on their fins. They are social fish and should be kept in groups of six or more to prevent stress and aggression. Rosy barbs prefer well-aerated water with plenty of vegetation and swimming space. They are relatively hardy and can adapt to a wide range of water parameters. Rosy barbs are omnivorous and will accept a variety of foods, including flakes, pellets, and live or frozen foods.",
        origin="India, Nepal, Bangladesh",
        care_level="Easy",
        max_size=6,  # Inches
        ph_range="6.5 - 7.5",
        bioload=3,
        image="/static/rosy_barb.jpeg"
    ),
    FreshwaterFish(
        common_name="Green terror cichlid",
        scientific_name="Andinoacara rivulatus",
        bio="Green terror cichlids (Andinoacara rivulatus) are striking and territorial freshwater fish native to South America. They are named for their vibrant green coloration and aggressive behavior, particularly during breeding. Green terror cichlids are best suited for experienced aquarists who can provide ample space and suitable tank mates. They prefer well-oxygenated water with plenty of hiding spots and territories to establish their dominance. Green terror cichlids are omnivorous and will accept a variety of foods, including pellets, live or frozen foods, and occasional vegetables. They are relatively hardy but can be aggressive towards other fish, so tank mates should be chosen carefully. Green terror cichlids prefer slightly acidic to neutral water with a pH range of 6.5 to 7.5 and a temperature between 72°F to 78°F.",
        origin="South America",
        care_level="Moderate",
        max_size=12,  # Inches
        ph_range="6.5 - 7.5",
        bioload=12,
        image="/static/green_terror.jpeg"
    ),
    FreshwaterFish(
        common_name="White cloud mountain minnow",
        scientific_name="Tanichthys albonubes",
        bio="White cloud mountain minnows (Tanichthys albonubes) are small and peaceful freshwater fish native to China. They are a popular choice for community aquariums due to their hardiness, peaceful nature, and striking colors. White cloud mountain minnows have a metallic silver body with iridescent hues of green and gold, especially during breeding displays. They are schooling fish and should be kept in groups of six or more to prevent stress and aggression. White cloud mountain minnows prefer well-oxygenated water with plenty of swimming space and moderate water flow. They are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly alkaline to neutral water with a pH range of 6.0 to 8.0 and a temperature between 64°F to 72°F. White cloud mountain minnows are omnivorous and will accept a variety of foods, including flakes, pellets, and live or frozen foods.",
        origin="China",
        care_level="Easy",
        max_size=1.5,  # Inches
        ph_range="6.0 - 8.0",
        bioload=1,
        image="/static/cloud_minnow.jpeg"
    ),
    FreshwaterFish(
        common_name="Panda Corydoras",
        scientific_name="Corydoras panda",
        bio="Panda Corydoras (Corydoras panda) are small and charming freshwater catfish native to South America, particularly the Amazon basin. They are named for their distinctive black and white coloration, which resembles a panda bear. Panda Corydoras are peaceful and social fish that do best in groups of six or more. They are bottom-dwellers and spend much of their time scavenging for food along the substrate. Panda Corydoras prefer well-planted aquariums with plenty of hiding spots and territories to explore. They are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly acidic to neutral water with a pH range of 6.0 to 7.5 and a temperature between 72°F to 78°F. Panda Corydoras are omnivorous and will accept a variety of foods, including sinking pellets, flakes, and live or frozen foods.",
        origin="South America",
        care_level="Easy",
        max_size=2,  # Inches
        ph_range="6.0 - 7.5",
        bioload=2,
        image="/static/panda_cory.jpeg"
    ),
    FreshwaterFish(
        common_name="Dwarf gourami",
        scientific_name="Trichogaster lalius",
        bio="Dwarf gouramis (Trichogaster lalius) are colorful and peaceful freshwater fish native to South Asia, particularly India, Bangladesh, and Pakistan. They are a popular choice for community aquariums due to their vibrant colors, peaceful nature, and ease of care. Dwarf gouramis come in a variety of color variations, including red, blue, and flame patterns. They are labyrinth fish, meaning they have a specialized organ that allows them to breathe air directly from the surface. Dwarf gouramis are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly acidic to neutral water with a pH range of 6.0 to 7.5 and a temperature between 72°F to 82°F. Dwarf gouramis are omnivorous and will accept a variety of foods, including flakes, pellets, and live or frozen foods.",
        origin="South Asia",
        care_level="Easy",
        max_size=2.5,  # Inches
        ph_range="6.0 - 7.5",
        bioload=3,
        image="/static/dwarf_gourami.jpeg"
    ),
    FreshwaterFish(
        common_name="African dwarf frog",
        scientific_name="Hymenochirus spp.",
        bio="African dwarf frogs (Hymenochirus spp.) are charming and fascinating amphibians native to Africa, particularly the Congo Basin and surrounding regions. They are fully aquatic and spend their entire lives in water, making them ideal inhabitants for aquariums. African dwarf frogs have smooth, streamlined bodies and long, webbed feet for swimming. They are relatively small in size, with adults typically reaching 1 to 2 inches in length. African dwarf frogs are peaceful and can be kept in community aquariums with other small and non-aggressive fish species. They prefer well-planted aquariums with plenty of hiding spots and territories to explore. African dwarf frogs are omnivorous and will accept a variety of foods, including sinking pellets, frozen foods, and live or frozen bloodworms.",
        origin="Africa",
        care_level="Easy",
        max_size=2,  # Inches
        ph_range="6.0 - 7.5",
        bioload=2,
        image="/static/dwarf_frog.jpeg"
    ),
    FreshwaterFish(
        common_name="Glass catfish",
        scientific_name="Kryptopterus bicirrhis",
        bio="Glass catfish (Kryptopterus bicirrhis) are unique and transparent freshwater fish native to Southeast Asia, particularly Thailand and Malaysia. They are named for their transparent bodies, which allow internal organs, such as their spine and digestive tract, to be visible. Glass catfish are peaceful and shoaling fish, meaning they prefer to be kept in groups of six or more. They are relatively shy and prefer well-planted aquariums with plenty of hiding spots and territories to explore. Glass catfish are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly acidic to neutral water with a pH range of 6.0 to 7.5 and a temperature between 75°F to 80°F. Glass catfish are omnivorous and will accept a variety of foods, including flakes, pellets, and live or frozen foods.",
        origin="Southeast Asia",
        care_level="Moderate",
        max_size=6,  # Inches
        ph_range="6.0 - 7.5",
        bioload=2,
        image="/static/glass_cat.jpeg"
    ),
    FreshwaterFish(
        common_name="Red-tailed shark",
        scientific_name="Epalzeorhynchos bicolor",
        bio="Red-tailed sharks (Epalzeorhynchos bicolor) are striking and territorial freshwater fish native to Thailand. Despite their name, they are not true sharks but rather members of the Cyprinidae family. Red-tailed sharks are known for their deep black bodies and vibrant red tails, which intensify as they mature. They are territorial and can be aggressive towards similar-looking fish species, so they are best kept in species-only tanks or with other robust fish species. Red-tailed sharks prefer well-oxygenated water with plenty of hiding spots and territories to establish their dominance. They are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly alkaline to neutral water with a pH range of 6.5 to 7.5 and a temperature between 72°F to 79°F. Red-tailed sharks are omnivorous and will accept a variety of foods, including sinking pellets, flakes, and live or frozen foods.",
        origin="Thailand",
        care_level="Moderate",
        max_size=6,  # Inches
        ph_range="6.5 - 7.5",
        bioload=6,
        image="/static/redtail_shark.jpeg"
    ),
    FreshwaterFish(
        common_name="Rummy nose tetra",
        scientific_name="Hemigrammus rhodostomus",
        bio="Rummy nose tetras (Hemigrammus rhodostomus) are vibrant and peaceful freshwater fish native to South America, particularly the Amazon basin. They are named for their distinctive red snout and shimmering silver body, which create a striking contrast. Rummy nose tetras are schooling fish and should be kept in groups of six or more to thrive. They prefer well-planted aquariums with plenty of open swimming space and moderate water flow. Rummy nose tetras are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly acidic to neutral water with a pH range of 6.0 to 7.5 and a temperature between 75°F to 82°F. They are omnivorous and will accept a variety of foods, including flakes, pellets, and live or frozen foods.",
        origin="South America",
        care_level="Easy",
        max_size=2,  # Inches
        ph_range="6.0 - 7.5",
        bioload=1,
        image="/static/rummynose_tetra.jpeg"
    ),
    FreshwaterFish(
        common_name="Green neon tetra",
        scientific_name="Paracheirodon simulans",
        bio="Green neon tetras (Paracheirodon simulans) are vibrant and peaceful freshwater fish closely related to the popular neon tetra (Paracheirodon innesi). They are native to South America, particularly the blackwater tributaries of the Rio Negro and Rio Solimões in Brazil. Green neon tetras are named for their stunning greenish-blue coloration, which intensifies under proper lighting conditions. They are schooling fish and should be kept in groups of six or more to thrive. Green neon tetras prefer well-planted aquariums with plenty of open swimming space and moderate water flow. They are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly acidic to neutral water with a pH range of 5.0 to 7.0 and a temperature between 72°F to 78°F. They are omnivorous and will accept a variety of foods, including flakes, pellets, and live or frozen foods.",
        origin="South America",
        care_level="Easy",
        max_size=1.5,  # Inches
        ph_range="5.0 - 7.0",
        bioload=1,
        image="/static/green_tetra.jpeg"
    ),
    FreshwaterFish(
        common_name="Bolivian ram",
        scientific_name="Mikrogeophagus altispinosa",
        bio="Bolivian rams (Mikrogeophagus altispinosa) are charming and peaceful freshwater cichlids native to South America, particularly the rivers and streams of Bolivia and Brazil. They are named for their vibrant colors, which include shades of blue, yellow, and orange, as well as their distinctive vertical black stripes. Bolivian rams are popular choices for community aquariums due to their peaceful nature, striking appearance, and ease of care. They prefer well-planted aquariums with plenty of hiding spots and territories to explore. Bolivian rams are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly acidic to neutral water with a pH range of 6.0 to 7.5 and a temperature between 72°F to 78°F. They are omnivorous and will accept a variety of foods, including flakes, pellets, and live or frozen foods.",
        origin="South America",
        care_level="Easy",
        max_size=3,  # Inches
        ph_range="6.0 - 7.5",
        bioload=3,
        image="/static/bolivian_ram.jpeg"
    ),
    FreshwaterFish(
        common_name="Blue gourami",
        scientific_name="Trichogaster trichopterus",
        bio="Blue gouramis (Trichogaster trichopterus) are colorful and peaceful freshwater fish native to Southeast Asia, particularly Indonesia, Malaysia, and Thailand. They are named for their vibrant blue coloration, which intensifies during breeding displays. Blue gouramis are labyrinth fish, meaning they have a specialized organ that allows them to breathe air directly from the surface. They are relatively peaceful and can be kept in community aquariums with other non-aggressive fish species. Blue gouramis prefer well-planted aquariums with plenty of hiding spots and territories to explore. They are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly acidic to neutral water with a pH range of 6.0 to 7.5 and a temperature between 72°F to 82°F. They are omnivorous and will accept a variety of foods, including flakes, pellets, and live or frozen foods.",
        origin="Southeast Asia",
        care_level="Easy",
        max_size=6,  # Inches
        ph_range="6.0 - 7.5",
        bioload=6,
        image="/static/blue_gourami.jpeg"
    ),
    FreshwaterFish(
        common_name="Lemon tetra",
        scientific_name="Hyphessobrycon pulchripinnis",
        bio="Lemon tetras (Hyphessobrycon pulchripinnis) are peaceful and vibrant freshwater fish native to South America, particularly the Amazon basin. They are named for their bright lemon-yellow coloration, which adds a splash of color to any aquarium. Lemon tetras are schooling fish and should be kept in groups of six or more to thrive. They prefer well-planted aquariums with plenty of open swimming space and moderate water flow. Lemon tetras are relatively hardy and can adapt to a wide range of water parameters, although they prefer slightly acidic to neutral water with a pH range of 6.0 to 7.5 and a temperature between 72°F to 78°F. They are omnivorous and will accept a variety of foods, including flakes, pellets, and live or frozen foods.",
        origin="South America",
        care_level="Easy",
        max_size=1.5,  # Inches
        ph_range="6.0 - 7.5",
        bioload=1,
        image="/static/lemon_tetra.jpeg"
    ),
]