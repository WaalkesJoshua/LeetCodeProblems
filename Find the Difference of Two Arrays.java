class Solution {
  public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
      //create return lists
      List<Integer> unique1 = new ArrayList<>();
      List<Integer> unique2 = new ArrayList<>();
      List<List<Integer>> answer = new ArrayList<>();
      //create sets
      HashSet<Integer> set1 = Arrays.stream(nums1)
                                      .boxed()
                                      .collect(Collectors.toCollection(HashSet::new));

      HashSet<Integer> set2 = Arrays.stream(nums2)
                                      .boxed()
                                      .collect(Collectors.toCollection(HashSet::new));

      for (int num: set1) {
          if(!set2.contains(num)) {
              unique1.add(num);
          }
      }
      for (int num: set2) {
          if(!set1.contains(num)) {
              unique2.add(num);
          }
      }
      answer.add(unique1);
      answer.add(unique2);
      return answer;


  }
}