class RecentCounter {
  //create a queue variable for new requests
  private Queue<Integer> newQueue;
  //create an old queue to retain old values
  private Queue<Integer> oldQueue;

  public RecentCounter() {
      //instiate queue as a linkedlist for optimal read/write
      this.newQueue = new LinkedList<Integer>();
      //instiate old queue as a linkedlist for optimal read/write
      this.oldQueue = new LinkedList<Integer>();

  }

  public int ping(int t) {
      //add t to newQueue
      newQueue.add(t);
      //check if value at front of queue is less than t - 3000
      while(newQueue.peek() < t - 3000) {
          //if so, remove it and add to old queue
        oldQueue.add(newQueue.poll());
      }
      //once the above condition is false, return the size of the queue
      return newQueue.size();
  }
}