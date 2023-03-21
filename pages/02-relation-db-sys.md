# 第 2 章 关系数据库

> The simplest yet most important data model.

- Information systems deal with storage and retrieval of data 信息系统处理数据的存储和检索
- Databases represent a whole collection of elements 数据库是所有元素的集合
- Relations are sets of tuples 关系的元组集
  - suitable to represent collections of data of any size
  - can be illustrated(说明) by tables

## 关系的形式化定义

> A relation schema provides an abstract description of the tuples(元组) in a relation 关系架构提供关系中的元组的抽象描述

### 域（Domain）

域是一组具有相同数据类型的值的集合，又称为值域（用 D 表示）。例如，整数、实数和字符串的集合都是域。

域中所包含的值的个数称为域的基数（用 m 表示）。在关系中就是用域来表示属性的取值范围的。

### 笛卡儿积（Cartesian Product）

给定一组域 $D_1, D_2, …, D_n$（它们可以包含相同的元素，既可以完全不同，也可以部分或全部相同），则 $D_1, D_2, …, D_n$ 的笛卡儿积为：

$$
D_1 × D_2 × … × D_n = \{(d_1, d_2, …, d_n) | d_i ∈ D_i, i=1, 2, …, n\}
$$

由定义可以看出，笛卡儿积也是一个集合，**一个二维表**。其中：

1. 每一个元素 $(d1, d2, … , dn)$ 中的每一个值 $d_i$ 叫做一个分量（Component），分量来自相应的域（$d_i ∈ D_i$）。
2. 每一个元素 $(d1, d2, … , dn)$ 叫做一个 n 元组（n-Tuple），简称元组（Tuple）。但元组是有序的，相同分量 $d_i$ 的不同排序所构成的元组不同。如，以下三个元组是不同的，$(1, 2, 3) ≠ (2, 3, 1) ≠ (1, 3, 2)$。
3. 若 $D_i (i=1, 2, … , n)$ 为有限集，$D_i$ 中的集合元素个数称为 $D_i$ 的基数，用 $m_i (i=1, 2, … , n)$ 表示，则笛卡儿积 $D_1×D_2×…×D_n$ 的基数 M［即元组 $(d1, d2, …, dn)$ 的个数］为所有域的基数的累乘之积，即 $M = ∏^n_{i=1} m_i$ 。

### 关系（Relation）

笛卡儿积 $D_1 × D_2 × … × D_n$ 的任一子集称为定义在域 $D_1, D_2, …, D_n$ 上的 n 元关系（Relation），可用 $R(D_1, D_2, …, D_n)$ 表示。其中，R 表示关系的名字，n 是关系的目或度（Degree）。

1. 在关系 R 中，当 $n=1$ 时，称为单元关系。当 $n=2$ 时，称为 二元关系，以此类推。

2. 关系中的每个元素是关系中的元组，通常用 t 表示，关系中元组个数是关系的基数。

   > 如果一个关系的元组个数是无限的，则称为无限关系；如果一个关系的元组个数是有限的，则称为有限关系。由于计算机存储系统的限制，我们一般不去处理无限关系，而只考虑有限关系。

3. 由于关系是笛卡儿积的子集，因此，也可以把关系看成一个二维表。其中：

   - 表的框架由域 $D_i (i=1, 2, … , n)$ 构成，即表的每一列对应一个域；
   - 表的每一行对应一个元组；
   - 由于不同域（列）的取值可以相同，为了加以区别，必须对每个域（列）起一个名字，称为属性（Attribute），n 元关系必有 n 个属性，属性的名字唯一；属性的取值范围称为值域，等价于对应域 $D_i (i=1, 2, … , n)$ 的取值范围；
   - 具有相同关系框架的关系称为同类关系。

4. 在数学上，关系是笛卡儿积的任意子集，但在实际应用中，关系是笛卡儿积中所取的有意义的子集。

   > 定义在域 $D_1, D_2, …, D_n$ （不要求完全相异）上的关系由关系头（Heading）和关系体（Body）组成。
   >
   > - 关系头由属性名 $A_1, A_2, …, A_n$ 的集合组成，每个属性 $A_i$ 对应一个域 $D_i (i=1, 2, … , n)$。关系头（关系框架）是关系的数据结构的描述，它是固定不变的。
   > - 关系体是指关系结构中的内容或者数据，它随元组的插入、删除或修改而变化。

### 关系的性质

1. 列是同质的，即每一列中的分量必须来自同一个域，必须是同一类型的数据。
2. 不同的属性可来自同一个域，但不同的属性必须有不同的名字。
3. 列的顺序可以任意交换。但交换时，应连同属性名一起交换，否则将得到不同的关系。
4. 关系中元组的顺序（即行序）可任意，在一个关系中可以任意交换两行的次序。因为关系是以元组为元素的集合，而集合中的元素是无序的，所以作为集合元素的元组也是无序的。
   > 根据关系的这个性质，可以改变元组的顺序使其具有某种排序，然后按照顺序查询数据，这样可以提高查询速度，如按照学号对元组进行排序等。
5. 关系中不允许出现相同的元组。因为数学上集合中没有相同的元素，而关系是元组的集合，所以作为集合元素的元组应该是唯一的。
6. 关系中每一分量必须是不可分的数据项，或者说所有属性值都是原子的，即是一个确定的值，而不是值的集合。属性值可以为空值，表示“未知”或“不可使用”，但不可“表中有表”。满足此条件的关系称为规范化关系，否则称为非规范化关系。

### 关系模式

关系的描述称为关系模式（Relation Schema）。它可以形式化地表示为：

$$
R (U, D, DOM, F)
$$

其中，R 为关系名；U 为组成该关系的属性名集合；D 为属性组 U 中属性所来自的域；DOM 为属性向域的映像集合；F 为属性间数据的依赖关系集合。在书写过程中，一般用下划线表示出关系中的主码。

由于属性间的数据依赖 F 将在后面中进行讨论，而域名 D 及属性向域的映像 DOM 常常直接说明为属性的类型、长度。因此，关系模式通常还可简记为：

$$
R(U)\ or\ R(A_1, A_2, ..., A_n)
$$

其中，R 为关系名；U 为属性名的集合；$A_1, A_2, ..., A_n$ 为各属性名。

## 关系的码与关系的完整性

### 候选码（Candidate Key）与超码（Superkey）

候选码：能唯一标识关系中元组的一个属性或属性集，称为候选码，也称候选关键字或候选键。如“学生关系”中的学号能唯一标识每一个学生，则属性“学号”是学生关系的候选码。在“选课关系”中，只有属性的组合“学号+课程号”才能唯一地区分每一条选课记录，则属性集“学号+课程号”是选课关系的候选码。

设关系 $R$ 有属性 $A1, A2, ..., An$，其属性集 $K=(A_i, A_j, ..., A_k)$，当且仅当满足下列条件时，$K$ 被称为候选码。

1. 唯一性（Uniqueness），关系 R 的任意两个不同元组，其属性集 K 的值是不同的。

2. 最小性（Minimum），组成关系键的属性集 $(Ai, Aj, ..., Ak)$ 中，任一属性都不能从属性 集 $K$ 中删掉，否则将破坏唯一性的性质。

例如“学生关系”中的每个学生的学号是唯一的，“选课关系”中“学号+课程号”的组合也是唯一的。在属性集“学号+课程号”满足最小性，从中去掉任一属性，都无法唯一标识选课记录。

超码：A superkey over a relation schema(关系模式) R is a ﬁnite subset K ⊆ R of R. An R -relation r is said to satisfy the superkey K over R if every pair of distinct tuples $t_1, t_2 ∈ r$ deviates on at least one attribute of K, that is, $t_1(A) \ne t_2 (A)$ for some $A ∈ K$.

在数据库中，Superkey 是指能够唯一标识关系模型中所有数据行的一个或多个属性的组合。其包含的属性可以是主键（唯一标识一个数据行）和非主键属性。

需要注意的是，Superkey 可以是最小的也可以是非最小的。如果一个 Superkey 的任意子集不是能够唯一标识数据行的，那么它就是非最小的 Superkey。

### 主码（Primary Key）

如果一个关系中有多个候选码，可以从中选择一个作为查询、插入或删除元组的操作变量，被选用的候选码称为主码，或称为主关系键、主键、关系键、关键字等。

例如，假设在学生关系中没有重名的学生，则“学号”和“姓名”都可作为学生关系的候选码。如果选定“学号”作为数据操作的依据，则“学号”为主码。如果选定“姓名”作为数据操作的依据，则“姓名”为主码。

主码是关系模型中的一个重要概念。每个关系必须选择一个主码，选定以后，不能随意改变。因为关系的元组无重复，因此关系的所有属性的组合可以唯一标识每个元组，但通常用属性数量少的属性组合作为主码。

### 主属性（Prime Attribute）与非主属性（Non-Prime Attribute）

主属性（Prime Attribute）：包含在主码中的各个属性称为主属性。

非主属性（Non-Prime Attribute）：不包含在任何候选码中的属性称为非主属性（或非码属性）。

### 外码（外部关系键）$

如果关系 $R_2$ 的一个或一组属性 $X$ 不是 $R_2$ 的主码，而是另一关系 $R_1$ 的主码，则该属性或属性组 $X$ 称为关系 $R_2$ 的外码（Foreign key）或外部关系键（在后续章节中统一称为外码），并称关系 R2 为参照关系（Referencing Relation），关系 R1 为被参照关系（Referenced Relation）。

如之前提到的选课关系中，“学号”属性与学生关系的主码“学号”相对应，“课程外号”属性与课程关系的主码“课程号”相对应。因此，“学号”和“课程号”属性是选课关系的码。学生关系和课程关系为被参照关系，选课关系为参照关系。

由外码的定义可知，被参照关系的主码和参照关系的外码必须定义在同一个域上。

Example:

Foreign keys on Director(id, title, year) are:

- $[id] ⊆ Person[id]$:
  the id of a director identiﬁes a unique person
- $[title,year] ⊆ Movie[title,year]$:
  the title and year of a director identify a unique movie

Movie(title, year, country) with key {title, year};
Actor(id, title, year, role) with:

- key {id, title, year, role} and
- foreign key $[title, year] ⊆ Movie[title, year]$

（反例）The foreign key **does not permit** the same databases as the two inclusion dependencies:

- $[title] ⊆ Movie[title]$ and
- $[year] ⊆ Movie[year]$

### 关系的完整性

关系模型中，有三类完整性约束，即**实体完整性**、**参照完整性**和**用户自定义的完整性**。其中，实体完整性和参照完整性是关系模型必须满足的完整性约束条件，被称作关系的两个不变性。任何关系数据库系统都应该支持这两类完整性。

**实体完整性（Entity Integrity）**：实体完整性是指主码的值不能为空或部分为空。

如学生关系中的主码“学号”不能为空，选课关系中的主码“学号+课程号”不能部分为空，即“学号”和“课程号”两个属性都不能为空。

**参照完整性（Referential Integrity）**：如果关系 $R_2$ 的外码 $X$ 与关系 $R_1$ 的主码相符，则 $X$ 的每个值或者等于 $R_1$ 中主码的 某一个值或者取空值。

它指的是在关系型数据库中，一个表中的外键必须引用另一个表的主键，而且这种引用必须是有效的。具体地说，这意味着如果两个表之间有外键约束，那么在插入、更新和删除数据时必须遵守一些规则：

1. 插入：插入数据时，必须确保外键引用的主键数据已经存在。
2. 更新：更新包含外键的记录时，必须确保新值是有效的主键值。否则，更新就会失败。
3. 删除：删除包含主键的记录时，必须确保在关联表中没有相应的外键，否则删除操作就会失败。

参照完整性可以帮助确保数据的一致性和完整性，避免了在关联表之间不一致的情况发生。

**用户自定义完整性（User-defined Integrity）**：用户自定义完整性是针对某一具体关系数据库的约束条件，它反映某一具体应用所涉及的数据 必须满足的语义要求。

关系模型应该提供定义和检验这类完整性的机制，以便用统一的、系统的方法处理它们，而不要由应用程序承担这一功能。

Integrity constraints greatly determine the design of a database schema

- to process most common queries(查询) efficiently, and
- to process most common updates efficiently, but
- in many cases compromises(妥协) are necessary

## Summary

- Relational DBMSs are based on the relational data model
- The relational data model is formally deﬁned, its properties can be proven, explained and justiﬁed, and formal query languages such as relational calculus and algebra have been deﬁned on it.
- The most important concepts in the relational data model are:
  - syntactic level: attributes, relation schemata, database schemata
  - semantic level: domains, tuples, relations, databases
- Integrity constraints play an important part in schema design
  - determine efficiency of updates
  - determine efficiency of queries
  - DBMSs oﬀer support for enforcement of some constraints
    - domain constraints, key constraints, foreign key constraints
