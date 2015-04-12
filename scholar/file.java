private String str = "";
public static void main(String[] args)
{
//long start, end;
int num=1;
ArrayList<Integer> values = new ArrayList<Integer>();
while(num < 11)
{
values.add(num);
num++;
}
Map<Integer, ArrayList<Integer>> map = new HashMap<Integer, ArrayList<Integer>>();
//Map<Integer, String> map2 = new HashMap<Integer, String>();
ArrayList<Integer> sequence = new ArrayList<Integer>();
for(int i : values)
{

//start = System.nanoTime();
map = hailstone(i, map, sequence);
//System.out.println(map.keySet());
//end = System.nanoTime();
display(map, i);
sequence.clear();

}
}
public static Map<Integer, ArrayList<Integer>> hailstone(int n, Map<Integer, ArrayList<Integer>> map, ArrayList<Integer> sequence)
{
if(map.containsKey(n))
{
for(int i=0; i<map.get(n).size(); i++)
{
sequence.add(map.get(n).get(i));
}
map.put(sequence.get(0), sequence);
}
else if(n==1)
{
sequence.add(n);
map.put(n, sequence);
}
else if(n%2 == 0)
{
sequence.add(n);
hailstone(n/2, map, sequence);
}
else
{
sequence.add(n);
hailstone(3*n+1, map, sequence);
}
return map;  
}
public static void display(Map<Integer, ArrayList<Integer>> map, int i)
{
String str = "";
System.out.println("h(" + i + ") takes " + (map.get(i).size()-1) + " steps in nanoseconds");     

for(int a=0; a<map.get(i).size(); a++)
{
str += map.get(i).get(a) + ", ";
}
System.out.println(str);
}
}