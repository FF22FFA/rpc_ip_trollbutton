function playAudios() {
    const audioSources = [
        'https://www.dropbox.com/scl/fi/g47boikuaibndauudpvr2/cfwip.mp3?rlkey=s0ml1rir3c1g0zuuw7kuaw82o&st=pd4ka0n1&dl=1',
        'https://www.dropbox.com/scl/fi/xw953doh9hh0ng2zo6bg7/Pyrocynical-Chinese-meme-original.mp3?rlkey=zgx7bi6hr8lkuvj1m8xam3mub&st=0j35oyb9&dl=1',
        'https://www.dropbox.com/scl/fi/rtb4d5k9bshoac1jl19w8/Adolf-Hitler-Speech-at-Krupp-Factory-in-Germany-1935-British-Path-AudioTrimmer.com-AudioTrimmer.com.mp3?rlkey=st958uct2szxn8c07a9mjkv7b&st=pn3e459v&dl=1'
        // Add more audio URLs as needed
    ];

    // Create Audio objects for each source
    const audios = audioSources.map(source => new Audio(source));

    // Play all audios simultaneously
    audios.forEach(audio => audio.play());
}
