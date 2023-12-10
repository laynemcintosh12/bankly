function timeWord(timeString) {
    const hours = [
      'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'
    ];
  
    const minutes = [
      'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    const primaryMinutes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty'];

    const phrases = ["oh", "o'clock"]

    if (timeString === '00:00') {
        return 'midnight';
    } else if (timeString === '12:00') {
        return 'noon';
    } else {
        const [hourStr, minuteStr] = timeString.split(':');
        let period = 'am';
        let hour = parseInt(hourStr, 10);

        if (hour >= 12) {
            period = 'pm';
            if (hour > 12) {
                hour -= 12;
            }
        }

        let minute = parseInt(minuteStr, 10);
        let minuteWord;
    
        if (minute === 0) {
            minuteWord = phrases[1]; // o'clock
        } else if (minute <= 19) {
            minuteWord = minutes[minute - 1];
        } else {
            const minuteOnes = minute % 10;
            const minuteTens = Math.floor(minute / 10);
            minuteWord = tens[minuteTens] + (minuteOnes > 0 ? ' ' + minutes[minuteOnes - 1] : '');
        }

        if (hour === 0){
            const hourWord = 'twelve';
            if (primaryMinutes.includes(minuteWord)){
                let newMinuteWord = phrases[0] + " " + minuteWord;
                return `${hourWord} ${newMinuteWord} ${period}`;
            } else {
                return `${hourWord} ${minuteWord} ${period}`;
            }
        } else {
            const hourWord = hours[hour - 1];
            if (primaryMinutes.includes(minuteWord)){
                let newMinuteWord = phrases[0] + " " + minuteWord;
                return `${hourWord} ${newMinuteWord} ${period}`;
            } else {
                return `${hourWord} ${minuteWord} ${period}`;
            }
        }
    }
}
  

module.exports = timeWord;