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
	if( word.length <= 1 ) { // 1 or 0
		return true;
	}
       else if( word[ 0 ] === word[ word.length - 1 ]) {
		return find( word.substring( 1, word.length - 1 ));
       }
	else {
		return false;
	}
}

console.time( 'Run time' );
findPalindromes( process.argv[ 2 ] || '' );
console.timeEnd( 'Run time' );
