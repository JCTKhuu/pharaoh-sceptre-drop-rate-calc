function effective_rate(rolls) {
    let no_drop_chance = 1 - rolls[0];
    
    for (let i = 1; i < rolls.length; i++) {
        no_drop_chance *= 1 - rolls[i];
    }

    let effective_rate = 1 / (1 - no_drop_chance);

    return effective_rate;
}

if (typeof require !== 'undefined' && require.main === module) {
    let chest_rolls = [1/4200, 1/2800, 1/1600, 1/950, 1/800, 1/750, 1/650, 1/650];
    let sarcophagus_rolls = [1/950, 1/800, 1/750, 1/650, 1/650];

    console.log(
        effective_rate(
            chest_rolls.concat(sarcophagus_rolls)
        )
    )
}