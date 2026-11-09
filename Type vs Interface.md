**Title** Type vs Interface
# **Introduction:**
In TypeScripts type and interface both are used for defining shape for objects.
They both can used for same task many time but there is some differences between them interms of their use cases.

**code Example:**
Interface:
interface Animal{

  name: string;
};
interface Animal{

  breed: string;
};

Type alias:
type AnimalType={
  name: string;
};

# **Explanation :**
**Main diffrence**
Interface can be decalre multiple time with same name.Eventually all of them with same will merge togehter.
on the other hand Type alias have same name they will generate eror . They cant be merge like interface.
they both can be implemented on class . But a class cant be implemented if type is a union type.


**Conclusion :**
they both are Important and have different Use cases. When we need to Use union we can use Union.
If we need to extends property later then Intrerface is the bset choice .


