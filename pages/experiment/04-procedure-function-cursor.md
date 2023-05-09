---
title: Procedure, Function and Cursor
---

## Stored program

Four types stored programs

| Type             | Description                                                                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Stored procedure | Can be called from an application that has access to the database.                                                                     |
| Stored function  | Can be called from a SQL statement. A stored function works much like the functions provided by MySQL that are described in chapter 9. |
| Trigger          | Is executed in response to an INSERT, UPDATE, or DELETE statement on a specified table.                                                |
| Event            | Is executed at a scheduled time.                                                                                                       |

一个存储过程可以从应用程序调用，访问数据库存储函数可以调用从一个 SQL 语句，就像 MySQL 所提供的功能，不需要被称为触发器和事件。相反，他们发生时自动执行。

::: tip Why Use Stored Programs?

- The use of stored programs can lead to a more secure database 使用存储程序可以获得更安全的数据库
- Stored programs can reduce network traffic
- Stored programs offer a mechanism to abstract data access routines, which can improve the maintainability of your code as underlying data structures evolve 存储程序提供了一种抽象数据访问例程的机制，可以随着底层数据结构的发展提高代码的可维护性

:::

### 存储过程

存储过程是数据库的一个重要的功能。

MySQL 5.0 开始支持存储过程，这样即可以大大提高数据库的处理速度，同时也可以提高数据库编程的灵活性。

::: tip
SQL 语句需要先编译然后执行。
:::

存储过程（Stored Procedure）是一组为了完成特定功能的 SQL 语句集，经编译后存储在数据库中，用户通过指定存储过程的名字并给定参数（如果该存储过程带有参数）来调用执行它。

存储过程是可编程的函数，在数据库中创建并保存，可以由 SQL 语句和控制结构组成。当想要在不同的应用程序或平台上执行相同的函数，或者封装特定功能时，存储过程是非常有用的。数据库中的存储过程可以看做是对编程中面向对象方法的模拟，它允许控制数据的访问方式。

存储过程的优点：

1. **增强 SQL 语言的功能和灵活性**：存储过程可以用控制语句编写，有很强的灵活性，可以完成复杂的判断和较复杂的运算。
2. **标准组件式编程**：存储过程被创建后，可以在程序中被多次调用，而不必重新编写该存储过程的 SQL 语句。而且数据库专业人员可以随时对存储过程进行修改，对应用程序源代码毫无影响。
3. **较快的执行速度**：如果某一操作包含大量的 Transaction-SQL 代码或分别被多次执行，那么存储过程要比批处理的执行速度快很多。因为存储过程是预编译的。在首次运行一个存储过程时查询，优化器对其进行分析优化，并且给出最终被存储在系统表中的执行计划。而批处理的 Transaction-SQL 语句在每次运行时都要进行编译和优化，速度相对要慢一些。
4. **减少网络流量**：针对同一个数据库对象的操作（如查询、修改），如果这一操作所涉及的 Transaction-SQL 语句被组织进存储过程，那么当在客户计算机上调用该存储过程时，网络中传送的只是该调用语句，从而大大减少网络流量并降低了网络负载。
5. **作为一种安全机制来充分利用**：通过对执行某一存储过程的权限进行限制，能够实现对相应的数据的访问权限的限制，避免了非授权用户对数据的访问，保证了数据的安全。

### 存储函数

- 存储函数只能返回单个值。
- 可以从 SQL 语句调用一个存储的函数
- 存储的函数只有一种类型的参数，即 IN。但是可以设置默认值

#### Syntax of MySQL Stored Procedure

```sql
DELIMITER &&
CREATE PROCEDURE procedure_name
[[IN|OUT|INOUT] parameter_name datatype [parameter]]
BEGIN 
	-- statements 
END &&
DELIMITER;
```

如：

```sql
-- Change statement delimiter from semicolon to double front slash
DELIMITER //

CREATE PROCEDURE test (
BEGIN
	DECLARE sum balancedue_var DECIMAL(9,2);

    SELECT SUM(invoice_total payment_total-credit_total)
	INTO sum_balance_due_var
	FROM invoices
	WHERE vendor id 95;

    IF sum_balance_due_var 0 THEN
	    SELECT CONCAT('Balance due: $'sum_balance_due_var) As message;
	ELSE
	    SELECT 'Balance paid in full' As message;
	END IF;
END//

-- Change statement delimiter from double front slash to semicolon
DELIMITER;

-- 以后只需要这样调用即可
CALL test();
```

::: tip 分隔符

MySQL 默认以“;”为分隔符，如果没有声明分隔符，则编译器会把存储过程当成 SQL 语句进行处理，因此编译过程会报错，所以要事先用“DELIMITER //”声明当前段分隔符，//替代分号成为新的分隔符；

让编译器把两个"//"之间的内容当做存储过程的代码，不会执行这些代码；

后续代码也可用//作为分隔符。

“DELIMITER;”的意为把分隔符还原为分号。

:::

A SQL statement used within stored programs:

- SELECT: Returns a result set to the calling program. Or, retrieves data from the database and stores it so it can be processed by the stored program.

如：

```sql
DELIMITER //

CREATE PROCEDURE test ()
BEGIN
	SELECT 'This is a test.' AS message;
END//
```

#### MySQL 存储过程的创建

语法：

```sql
CREATE PROCEDURE 过程名([[IN|OUT|INOUT] 参数名 数据类型[,[IN|OUT|INOUT] 参数名 数据类型…]]) [特性 ...] 过程体
```

如：

```sql
DELIMITER //
  CREATE PROCEDURE myproc(OUT s int)
    BEGIN
      SELECT COUNT(*) INTO s FROM students;
    END//
DELIMITER;
```

存储过程根据需要可能会有输入、输出、输入输出参数，如果有多个参数用","分割开。MySQL 存储过程的参数用在存储过程的定义，共有三种参数类型，分别为 IN，OUT 和 INOUT：

- IN：参数的值必须在调用存储过程时指定，在存储过程中修改该参数的值不能被返回，为默认值
- OUT：该值可在存储过程内部被改变，并可返回
- INOUT：调用时指定，并且可被改变和返回

过程体的开始与结束使用 BEGIN 与 END 进行标识。

如：

```sql
DELIMITER //
CREATE PROCEDURE in_param(IN p_in INT) # 此处使用了参数类型
    BEGIN
    SELECT p_in;
    SET p_in=2;
    SELECT p_in;
END;
//
DELIMITER;
# 调用
SET @p_in=1;
CALL in_param(@p_in);
SELECT @p_in;

-- 参数类型为 IN 时输出：1、2、1（p_in虽然在存储过程中被修改，但并不影响@p_id的值）
-- 参数类型为 OUT 时输出：NULL、2、2（只要是 OUT 类型，存储过程内最初一定是 NULL）
-- 参数类型为 INOUT 时输出：1、2、2（类比 C++ 中的引用传参）
```

#### MySQL 存储过程的删除

```sql
DROP PROCEDURE [过程1[,过程2…]]
```

从 MySQL 的表格中删除一个或多个存储过程。

## SQL statements

for controlling the flow of execution.

### IF...ELSEIF...ELSE

Controls the flow of execution based on a condition.

类比 C++的 `if...else if...else...`。

详细用法：

```sql
IF boolean_expression THEN
	statement_1;
	[statement 2;]...
[ELSEIF boolean_expression THEN
	statement_1;
	[statement_2;]...]...
[ELSE
	statement_1;
	[statement_2;]...]...
END IF;
```

如：

```sql
CREATE PROCEDURE test()
BEGIN
	DECLARE first_invoice_due_date DATE;

	SELECT MIN(invoice_due_date)
	INTo first_invoice_due_date
	FROM invoices
	WHERE invoice_total - payment_total - credit_total > 0;

	IF first_invoice_due_date < NOW() THEN
		SELECT 'Outstanding invoices overdue!';
	ELSEIF first_invoice_due_date = NOW() THEN
		SELECT 'Outstanding invoices are due today!';
	ELSE
		SELECT'No invoices are overdue.';
	END IF;
END//
```

### CASE...WHEN...ELSE

Controls the flow of execution based on a condition.

类比 C++的 `switch...case x:...`。

详细用法：

```sql
CASE expression
	WHEN expression_value_1 THEN
		statement_1;
		[statement_2;]...
	[WHEN expression_value_2 THEN
		statement1;
		[statement_2;]...]...
	[ELSE
		statement_1;
		[statement_2;]...]...
END CASE;
```

如：

```sql
CREATE PROCEDURE test()
BEGIN
	DECLARE terms_id_var INT;

	SELECT terms_id INTO terms_id_var
	FROM invoices WHERE invoice_id = 4;

	CASE terms_id_var
		WHEN 1 THEN
			SELECT 'Net due 10 days'As Terms;
		WHEN 2 THEN
			SELECT 'Net due 20 days'AS Terms;
		WHEN 3 THEN
			SELECT 'Net due 30 days'AS Terms;
		ELSE
			SELECT 'Net due more than 30 days'AS Terms;
	END CASE;
END//
```

### WHILE...DO...LOOP

Repeats statements while a condition is true.

类比 C++的 `while...`。

详细用法：

```sql
WHILE boolean_expression DO
	statement 1;
	[statement_2;]...
END WHILE;
```

如：

```sql
CREATE PROCEDURE test ()
BEGIN
	DECLARE i INT DEFAULT 1;
	DECLARE S VARCHAR(400) DEFAULT '119';

	WHILE i < 4 DO
		SET S = CONCAT(s, 'i=', i, ',');
		SET i = i + 1;
	END WHILE;

	SELECT S AS message;
END //
```

### REPEAT...UNTIL...END REPEAT

Repeats statements while a condition is true.

类比 C++的 `do...while...`

A REPEAT loop:

```sql
REPEAT
	SET s = CONCAT(s, 'i=', i, ' | ');
	SET i = i + 1;
UNTIL i = 4
END REPEAT;
```

A simple loop:

```sql
testLoop : LOOP
	SET s = CONCAT(s, 'i=', i, ' | ')
	SET i = i + 1;

	IF i = 4 THEN
		LEAVE testLoop;
	END IF;
END LOOP testLoop;
```

### DECLARE CURSOR FOR

Defines a result set that can be processed by a loop.

### DECLARE...HANDLER

Defines a handler that's executed when a stored program encounters an error.

类比 Python 的 `try...catch`。

### 变量声明与赋值

变量存储一个值，该值可以在过程执行时被更改。

变量声明语法格式：

```
DECLARE variable_name data_type [DEFAULT literal_value];
```

赋值方法：

- 变量申明时赋值：

  ```sql
  DECLARE vendor id var INT DEFAULT 95;
  ```

- 使用 SET 语句：

  ```sql
  SET variable_name literal_value_or_expression;
  ```

- 使用 SELECT 语句：

  ```sql
  SELECT column 1[,column_2]...
  INTO variable_name_1[,variable_name_2]...
  ```

:::tip mysql 存储过程中 declare 和 set 定义变量的区别

mysql 存储过程中，定义变量有两种方式：

1. **会话变量**：使用 set 或 select 直接赋值，变量名以 @ 开头。如:

   ```sql
   set @var=1;
   ```

   可以在一个会话的任何地方声明，作用域是整个会话。它们不会被再初始化，在一个会话内，只须初始化一次，之后在会话内都是对上一次计算的结果，就相当于在是这个会话内的全局变量。

2. **存储过程变量**：以 DECLARE 关键字声明的变量，只能在存储过程中使用。如：

   ```sql
   DECLARE var1 INT DEFAULT 0;
   ```

   主要用在存储过程中，或者是给存储传参数中。在调用存储过程时，这些变量都会被初始化为 NULL。

:::

## Cursor

部分参考自 [SQL -- 游标（详细）sql 游标 Mr.Li 高的博客-CSDN 博客](https://blog.csdn.net/M1234uy/article/details/107460439)，有删改。

游标（cursor）是系统为用户开设的一个数据缓冲区，存放 SQL 语句的执行结果。每个游标区都有一个名字，用户可以用 SQL 语句逐一从游标中获取记录做进一步的处理。

游标的实现功能：

- 允许对 SELECT 返回的表中的每一行进行相同或不同的操作，而不是一次对整个结果集进行同一种操作；
- 从表中的当前位置检索一行或多行数据；
- 游标允许应用程序对当前位置的数据进行修改、删除的能力；
- 对于不同用户对结果集包含的数据所做的修改，支持不同的可见性级别；
- 提供脚本、存储过程、触发器中用于访问结果集中的数据的语句。

使用步骤：

- 声明游标
- 打开游标
- 读取游标
- 释放游标

### 声明游标

声明游标是指用 DECLARE 语句创建一个游标。声明游标主要包括以下内容：游标名称、数据来源、选取条件和属性。

```sql
DECLARE 游标名称 CURSOR
[ LOCAL | GLOBAL ]                                   -- 游标的作用域
[ FORWORD_ONLY | SCROLL ]                            -- 游标的移动方向
[ STATIC | KEYSET | DYNAMIC | FAST_FORWARD ]         -- 游标的类型
[ READ_ONLY | SCROLL_LOCKS | OPTIMISTIC ]            -- 游标的访问类型
[ TYPE_WARNING]                                      -- 类型转换警告语句
FOR SELECT 语句                                      -- SELECT查询语句
[ FOR { READ ONLY | UPDATE [OF 列名称]}][,...n]      -- 可修改的列
```

如：

```sql
-- 声明游标
DECLARE curl CURSOR
FOR SELECT * FROM student
-- 将游标变量 @var_curl 与 curl相关联
DECLARE @var_curl CURSOR
SET @var_curl=curl
```

Declare an error handler for when no rows are found in the cursor:

```sql
DECLARE CONTINUE HANDLER FOR NOT FOUND handler_statement;
```

### 打开游标

游标声明后，如果要从游标中读取数据必须要打开游标。打开游标是指打开已经声明但尚未打开的游标，并执行游标中定义的查询。

```sql
OPEN cursor_name;
```

在游标被成功打开后，全局变量 `@@CORSOR_ROWS` 用来记录游标内的数据行数。返回值有四种：

| 返回值 | 描述                                                        |
| ------ | ----------------------------------------------------------- |
| -m     | 表示仍在从基础表向游标读入数据，m表示当前在游标中的数据行数 |
| -1     | 该游标是一个动态游标，其返回值无法确定                      |
| 0      | 无符合调剂的记录或游标已经关闭                              |
| n      | 从基础表向游标读入数据已结束，n 为游标中已有的数据记录行数  |

如：创建游标 curl，使 curl 可以对 student 表所有的数据进行操作，然后打开该游标，输出游标中的行数。

```sql
-- 打开 curl 游标
OPEN curl
SELECT '游标curl数据行数' = @@CURSOR_ROWS
-- 结果：-1
```

### 读取游标

当游标打开后就可以使用 FETCH 命令从游标中逐行地读取数据，以进行相关处理。

```sql
-- 读取数据的位置
FETCH [[ NEXT | PRIOR | FIRST | LAST | ABSOLUTE{n|@nvar }| RELATIVE { n|@nvar }] FROM ]
{{[ GLOBAL] 游标名称} | @游标变量名称 }
-- 将读取的游标数据存放到指定变量中
[ INTO @游标变量名称 ][,...n]                                                       
```

FETCH语句执行时，可以使用全局变量 `@@FETCH_STATUS` 返回上次执行 FETCH 命令的状态。在每次用 fetch 从游标中读取数据时，都应检查该变量，以确定上次 FETCH操作是否成功，来决定如何进行下一步处理。返回值有三种：

| 返回值 | 描述                                            |
| ------ | ----------------------------------------------- |
| 0      | FETCH命令被成功执行                             |
| 1      | FETCH命令失败或者行数据超过游标数据结果集的范围 |
| 2      | 所读取的数据已经不存在                          |

如：从游标中提取数据，并查看 FETCH 命令的执行状态。

Close the cursor:

```sql
CLOSE cursor_name
```
