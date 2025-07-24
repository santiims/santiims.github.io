const MIRAGE = 'Mirage';
const DUST2 = 'Dust2';
const NUKE = 'Nuke';
const ANCIENT = 'Ancient';
const VERTIGO = 'Vertigo';
const ANUBIS = 'Anubis';
const OVERPASS = 'Overpass';
const INFERNO = 'Inferno';

const MAPS = [
    MIRAGE,
    DUST2,
    NUKE,
    ANCIENT,
    VERTIGO,
    ANUBIS,
    OVERPASS,
    INFERNO,
];

const SMOKE = 'Smoke';
const GRENADE = 'Grenade';
const MOLOTOV = 'Molotov';
const FLASH = 'Flash';
const DECOY = 'Decoy';

const GRENADES = [
    SMOKE,
    GRENADE,
    MOLOTOV,
    FLASH,
    DECOY,
];

const EASY = 'Easy';
const MEDIUM = 'Medium';
const HARD = 'Hard';

const DIFFICULTIES = [
    EASY,
    MEDIUM,
    HARD,
];

const JUMPTHROW = 'jumpthrow';
const RUNTHROW = 'runthrow';
const CROUCH = 'crouch';

const MOVEMENTS = [
    JUMPTHROW,
    RUNTHROW,
    CROUCH,
];

const texts = {
    'map': 'All maps',
    'grenade': 'All grenades',
    'difficulty': 'All difficulties',
};

const data = [
    // DUST2
    {
        image: 'clips/dust2/smoke_xbox.webm',
        grenade: SMOKE,
        jumpthrow: true,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Smoke Xbox',
        map: DUST2,
        difficulty: EASY,
    },
    {
        image: 'clips/dust2/molly_car.webm',
        grenade: MOLOTOV,
        jumpthrow: true,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Molly car',
        map: DUST2,
        difficulty: EASY,
    },
    {
        image: 'clips/dust2/molly_gay_spot.webm',
        grenade: MOLOTOV,
        jumpthrow: true,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Molly A site boxes',
        map: DUST2,
        difficulty: EASY,
    },
    {
        image: 'clips/dust2/smoke_cross.webm',
        grenade: SMOKE,
        jumpthrow: true,
        runthrow: true,
        crouch: false,
        additionalNotes: 'Smoke long cross',
        map: DUST2,
        difficulty: MEDIUM,
    },
    {
        image: 'clips/dust2/molly_short.webm',
        grenade: MOLOTOV,
        jumpthrow: true,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Molly short',
        map: DUST2,
        difficulty: EASY,
    },
    {
        image: 'clips/dust2/smoke_B_doors.webm',
        grenade: SMOKE,
        jumpthrow: true,
        runthrow: true,
        crouch: false,
        additionalNotes: 'Smoke B doors',
        map: DUST2,
        difficulty: MEDIUM,
    },
    {
        image: 'clips/dust2/flash_short.webm',
        grenade: FLASH,
        jumpthrow: true,
        runthrow: true,
        crouch: false,
        additionalNotes: 'Popflash short',
        map: DUST2,
        difficulty: MEDIUM,
    },
    // MIRAGE
    {
        image: 'clips/mirage/smoke_window.mp4',
        grenade: SMOKE,
        jumpthrow: true,
        runthrow: true,
        crouch: true,
        additionalNotes: 'Smoke window',
        map: MIRAGE,
        difficulty: HARD,
    },
    // INFERNO
    {
        image: 'clips/inferno/smoke_coffin.mp4',
        grenade: SMOKE,
        jumpthrow: false,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Smoke coffins',
        map: INFERNO,
        difficulty: EASY,
    },
    {
        image: 'clips/inferno/molly_newbox.mp4',
        grenade: MOLOTOV,
        jumpthrow: false,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Molly newbox',
        map: INFERNO,
        difficulty: EASY,
    },
    {
        image: 'clips/inferno/smoke_ct.mp4',
        grenade: SMOKE,
        jumpthrow: false,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Smoke CT',
        map: INFERNO,
        difficulty: EASY,
    },
    {
        image: 'clips/inferno/smoke_banana.webm',
        grenade: SMOKE,
        jumpthrow: true,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Smoke banana',
        map: INFERNO,
        difficulty: MEDIUM,
    },
    {
        image: 'clips/inferno/smoke_boost.mp4',
        grenade: SMOKE,
        jumpthrow: false,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Smoke CT boost',
        map: INFERNO,
        difficulty: EASY,
    },
    // OVERPASS
    {
        image: 'clips/overpass/smoke_monster.mp4',
        grenade: SMOKE,
        jumpthrow: true,
        runthrow: false,
        crouch: true,
        additionalNotes: 'Smoke monster',
        map: OVERPASS,
        difficulty: MEDIUM,
    },
    // VERTIGO
    {
        image: 'clips/vertigo/smoke_ramp.mp4',
        grenade: SMOKE,
        jumpthrow: false,
        runthrow: true,
        crouch: false,
        additionalNotes: 'Smoke ramp',
        map: VERTIGO,
        difficulty: MEDIUM,
    },
    {
        image: 'clips/vertigo/smoke_short.mp4',
        grenade: SMOKE,
        jumpthrow: true,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Smoke short',
        map: VERTIGO,
        difficulty: EASY,
    },
    {
        image: 'clips/vertigo/smoke_ramp_2.mp4',
        grenade: SMOKE,
        jumpthrow: false,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Smoke ramp',
        map: VERTIGO,
        difficulty: EASY,
    },
    // ANCIENT
    {
        image: 'clips/ancient/smoke_mid.mp4',
        grenade: SMOKE,
        jumpthrow: true,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Smoke mid',
        map: ANCIENT,
        difficulty: EASY,
    },
    {
        image: 'clips/ancient/smoke_a.mp4',
        grenade: SMOKE,
        jumpthrow: true,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Smoke A - CT',
        map: ANCIENT,
        difficulty: EASY,
    },
    {
        image: 'clips/ancient/smoke_b.mp4',
        grenade: SMOKE,
        jumpthrow: true,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Smoke B - CT',
        map: ANCIENT,
        difficulty: EASY,
    },
    // NUKE
    {
        image: 'clips/nuke/smoke_outside_1.mp4',
        grenade: SMOKE,
        jumpthrow: true,
        runthrow: false,
        crouch: false,
        additionalNotes: 'Smoke cross to secret',
        map: NUKE,
        difficulty: EASY,
    },
    {
        image: 'clips/nuke/molotov_outside.mp4',
        grenade: MOLOTOV,
        jumpthrow: false,
        runthrow: true,
        crouch: false,
        additionalNotes: 'Molly outside',
        map: NUKE,
        difficulty: HARD,
    },
    // ANUBIS
    {
        image: 'clips/anubis/smoke_mid.mp4',
        grenade: SMOKE,
        jumpthrow: true,
        runthrow: false,
        crouch: true,
        additionalNotes: 'Smoke mid',
        map: ANUBIS,
        difficulty: EASY,
    },
];