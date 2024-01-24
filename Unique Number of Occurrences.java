class Solution {
  public boolean uniqueOccurrences(int[] arr) {
      //edge case, if only one value, return true;
      if (arr.length == 1) {
          return true;
      }

      //create a hashmap
      Map<Integer, Integer> occMap = new HashMap<>();
      //create a set
      //iterate over the arr and  in the map create a key for each int and increment value for each occurance
      for (int num : arr) {
      occMap.merge(num, 1, Integer :: sum);
      }
      //then create a HashSet with the values of the Map and compare the sizes of the two
      Set<Integer> occSet = new HashSet<>(occMap.values());
      //if equal return true
      if (occMap.size() == occSet.size()) {
          return true;
      } else {
          return false;
      }
  }
}

// O: boolean
// I: Unsorted array of ints
// C: at least one value in input array
// E: only one value in input array
// D: Map and Set would likely be useful

