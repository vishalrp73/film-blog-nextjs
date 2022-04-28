export const QuickSort = ( films ) => {

    const swap = (films, leftIndex, rightIndex) => {
        let temp = films[leftIndex];
        films[leftIndex] = films[rightIndex];
        films[rightIndex] = temp;
    }

    const partition = ( films, left, right ) => {
        let pivot = films[Math.floor((right + left) / 2)],
        i = left,
        j = right

        while (i <= j) {
            while (films[i].year < pivot.year) {
                i++
            }
            while (films[j].year > pivot.year) {
                j--
            }
            if (i <= j) {
                swap(films, i, j);
                i++
                j--
            }
        }
        return i;
    }

    const quickSort = (films, left, right) => {
        let index;
        if (films.length > 1) {
            index = partition(films, left, right);
            if (left < index - 1) {
                quickSort(films, left, index - 1);
            }
            if (index < right) {
                quickSort(films, index, right);
            }
            return films;
        }
    }

    try {
        const sortedArray = quickSort(films, 0, films.length - 1);
        return sortedArray;
    } catch {
        console.log('no films');
    }


}