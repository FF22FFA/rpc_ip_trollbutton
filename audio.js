function playAudios() {
    const audioSources = [
        'https://www.dropbox.com/scl/fi/g47boikuaibndauudpvr2/cfwip.mp3?rlkey=s0ml1rir3c1g0zuuw7kuaw82o&st=pd4ka0n1&dl=1',
        'https://www.dropbox.com/scl/fi/xw953doh9hh0ng2zo6bg7/Pyrocynical-Chinese-meme-original.mp3?rlkey=zgx7bi6hr8lkuvj1m8xam3mub&st=0j35oyb9&dl=1',
        'https://www.dropbox.com/scl/fi/41qdt1ecpb4vsvlcvv983/Adolf-Hitler-Speech-at-Krupp-Factory-in-Germany-1935-British-Path.mp3?rlkey=dm9fbp43k9znaqpz4rfju9cmd&st=zf017fi1&dl=1',
        'https://www.dropbox.com/scl/fi/pupam11imbxe65h5uz2d0/Ambatukam-Sound-Effect.mp3?rlkey=x22w99tih8vxib0g69dybnbbq&st=d5lg6d53&dl=1',
        'https://www.dropbox.com/scl/fi/z2zec0koorovqvzllfief/Is-that-D-good-Yes-king-TikTok-audio.mp3?rlkey=voxjph7v3964cj3crxpin5h6b&st=f85qau9r&dl=1'
        // Add more audio URLs as needed
    ];

    // Create Audio objects for each source
    const audios = audioSources.map(source => new Audio(source));

    // Play all audios simultaneously
    audios.forEach(audio => audio.play());
}
