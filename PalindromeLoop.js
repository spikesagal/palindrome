findPalindromes = function findPalindromes( word ) {
	for( var numLetters = 1; numLetters <= word.length; numLetters ++ ) {
		for( var index = 0; index <= word.length - numLetters; index ++ ) {
			var subword = word.substr( index, numLetters );
			if( find( subword )) {
				console.log( subword );
			}
		}
	}
}

find = function find( word ) {
	var isPalindrome = true;
	for( var i = 0; i <= Math.floor( word.length / 2 ); i ++ ) {
        if( word[ i ] !== word[ word.length - 1 - i ] ) {
			isPalindrome = false;
			break;
        }
	}
	return isPalindrome;
}

console.time( 'Run time' );
findPalindromes( process.argv[ 2 ] || '' );
console.timeEnd( 'Run time' );
