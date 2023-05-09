---
title: 03 Data integrity constraints, the function of use, index creation
---

## Constraints 数据完整性约束

详见：[Chapter3@定义数据表的约束](../03-data-def-lang#定义数据表的约束)

- `PRIMARY KEY(PK)`：标识该字段为该表的主键，可以唯一的标识记录
- `FOREIGN KEY(FK)`：标识该字段为该表的外键
- `NOT NULL`：标识该字段不能为空
- `UNIQUE KEY(UK)`：标识该字段的值是唯一的
- `AUTO_INCREMENT`：标识该字段的值自动增长（整数类型，而且为主键）
- `DEFAULT`：为该字段设置默认值

### 唯一约束 UNIQUE

方法一：

```sql
create table department1(
    id int,
    name varchar(20) unique,
    comment varchar(100)
);
```

方法二：

```sql
create table department2(
    id int,
    name varchar(20),
    comment varchar(100),
    # 设置规则（constraint），名为 uk_name
    constraint uk_name unique(name)
);
```

测试执行结果：

```sql
insert into department1 values(1,'IT','技术');
# Query OK, 1 row affected (0.00 sec)
insert into department1 values(1,'IT','技术');
# ERROR 1062 (23000): Duplicate entry 'IT' for key 'name'
```

### not null 与 default

如：

```sql
create table student2(
    id int primary key auto_increment,
    name char(5),
    sex enum('male','female') not null default 'female'
);
```

### auto_increment

不指定 id，则自动增长。如：

```sql
-- 假设我们有设计了这样一个表格：
create table student(
    id int primary key auto_increment,
    name varchar(20),
    sex enum('male','female') default 'male'
);

-- 这是它的各个列：
desc student;
# +-------+-----------------------+------+-----+---------+----------------+
# | Field | Type                  | Null | Key | Default | Extra          |
# +-------+-----------------------+------+-----+---------+----------------+
# | id    | int(11)               | NO   | PRI | NULL    | auto_increment |
# | name  | varchar(20)           | YES  |     | NULL    |                |
# | sex   | enum('male','female') | YES  |     | male    |                |
# +-------+-----------------------+------+-----+---------+----------------+

-- 试图不带 id 添加：
insert into student(name) values
# -> ('egon'),
# -> ('alex')

-- 查看表格数据：
select * from student;
# +----+------+------+

# | id | name | sex  |
# +----+------+------+
# |  1 | egon | male |
# |  2 | alex | male |
# +----+------+------+
```

## Function 函数

### 1. 数学函数

- `ABS(x)`：返回 x 的绝对值
- `BIN(x)`：返回 x 的二进制（`OCT`返回八进制，`HEX`返回十六进制）
- `CEILING(x)`：返回大于 x 的最小整数值
- `EXP(x)`：返回值 e（自然对数的底）的 x 次方
- `FLOOR(x)`：返回小于 x 的最大整数值
- `GREATEST(x1,x2,...,xn)`：返回集合中最大的值
- `LEAST(x1,x2,...,xn)`：返回集合中最小的值
- `LN(x)`：返回 x 的自然对数
- `LOG(x,y)`：返回 x 的以 y 为底的对数
- `MOD(x,y)`：返回 x/y 的模（余数）
- `PI()`：返回 pi 的值（圆周率）
- `RAND()`：返回０到１内的随机值，可以通过提供一个参数(种子)使`RAND()`随机数生成器生成一个指定的值。
- `ROUND(x,y)`：返回参数 x 的四舍五入的有 y 位小数的值
- `SIGN(x)`：返回代表数字 x 的符号的值
- `SQRT(x)`：返回一个数的平方根
- `TRUNCATE(x,y)`：返回数字 x 截短为 y 位小数的结果

### 2. 聚合函数

常用于 GROUP BY 从句的 SELECT 查询中。

- `AVG(col)`：返回指定列的平均值
- `COUNT(col)`：返回指定列中非 NULL 值的个数
- `MIN(col)`：返回指定列的最小值
- `MAX(col)`：返回指定列的最大值
- `SUM(col)`：返回指定列的所有值之和
- `GROUP_CONCAT(col)`：返回由属于一组的列值连接组合而成的结果

### 3. 字符串函数

- `ASCII(char)`：返回字符的 ASCII 码值
- `BIT_LENGTH(str)`：返回字符串的比特长度
- `CONCAT(s1,s2...,sn)`：将 s1,s2...,sn 连接成字符串
- `CONCAT_WS(sep,s1,s2...,sn)`：将 s1,s2...,sn 连接成字符串，并用 sep 字符间隔
- `INSERT(str,x,y,instr)`：将字符串 str 从第 x 位置开始，y 个字符长的子串替换为字符串 instr，返回结果
- `FIND_IN_SET(str,list)`：分析逗号分隔的 list 列表，如果发现 str，返回 str 在 list 中的位置
- `LCASE(str)`或`LOWER(str)`：返回将字符串 str 中所有字符改变为小写后的结果
- `LEFT(str,x)`：返回字符串 str 中最左边的 x 个字符
- `LENGTH(s)`：返回字符串 str 中的字符数
- `LTRIM(str)`：从字符串 str 中切掉开头的空格
- `POSITION(substr,str)`：返回子串`substr`在字符串`str`中第一次出现的位置
- `QUOTE(str)`：用反斜杠转义`str`中的单引号
- `REPEAT(str,srchstr,rplcstr)`：返回字符串`str`重复`x`次的结果
- `REVERSE(str)`：返回颠倒字符串`str`的结果
- `RIGHT(str,x)`：返回字符串`str`中最右边的`x`个字符
- `RTRIM(str)`：返回字符串`str`尾部的空格
- `STRCMP(s1,s2)`：比较字符串`s1`和`s2`
- `TRIM(str)`：去除字符串首部和尾部的所有空格
- `UCASE(str)`或`UPPER(str)`：返回将字符串`str`中所有字符转变为大写后的结果

### 4. 日期和时间函数

- `CURDATE()`或`CURRENT_DATE()`：返回当前的日期

- `CURTIME()`或`CURRENT_TIME()`：返回当前的时间

- `DATE_ADD(date,INTERVAL int keyword)`：返回日期`date`加上间隔时间`int`的结果(`int`必须按照关键字进行格式化)，如：

  ```sql
  SELECT DATE_ADD(CURRENT_DATE, INTERVAL 6 MONTH);
  ```

- `DATE_FORMAT(date,fmt)`：依照指定的`fmt`格式格式化日期`date`值

- `DATE_SUB(date,INTERVAL int keyword)`：返回日期`date`减去间隔时间`int`的结果(`int`必须按照关键字进行格式化)，如：

  ```sql
  SELECT DATE_SUB(CURRENT_DATE, INTERVAL 6 MONTH);
  ```

- `DAYOFWEEK(date)`：返回`date`所代表的一星期中的第几天(1~7)

  注意是：1=星期天，2=星期一, …，7=星期六，这些索引值对应于 ODBC 标准。如：

  ```sql
  select DAYOFWEEK('1998-02-03');
  # 3
  ```

- `DAYOFMONTH(date)`：返回`date`是一个月的第几天(1~31)

- `DAYOFYEAR(date)`：返回`date`是一年的第几天(1~366)

- `DAYNAME(date)`：返回`date`的星期名，如：

  ```sql
  SELECT DAYNAME(CURRENT_DATE);
  ```

- `FROM_UNIXTIME(ts,fmt)`：根据指定的`fmt`格式，格式化 UNIX 时间戳`ts`

- `HOUR(time)`：返回`time`的小时值(0~23)

- `MINUTE(time)`：返回`time`的分钟值(0~59)

- `MONTH(date)`：返回`date`的月份值(1~12)

- `MONTHNAME(date)`：返回`date`的月份名，如：`SELECT MONTHNAME(CURRENT_DATE);`

- `NOW()`：返回当前的日期和时间

- `QUARTER(date)`：返回`date`在一年中的季度(1~4)，如`SELECT QUARTER(CURRENT_DATE);`

- `WEEK(date)`：返回日期`date`为一年中第几周(0~53)

- `YEAR(date)`：返回日期`date`的年份(1000~9999)W

> 额外的几个日期处理函数：
>
> ### `DATE_FORMAT(date,format)`
>
> 根据 `format` 字符串格式化 `date` 值。下列修饰符可以被用在 `format` 字符串中：
>
> - `%M`：月名字（January ~ December）
> - `%W`：星期名字（Sunday ~ Saturday）
> - `%D`：有英语前缀的月份的日期（1st，2nd，3rd，等等。）
> - `%Y`：年，数字，4 位
> - `%y`：年，数字，2 位
> - `%a`：缩写的星期名字（Sun ~ Sat）
> - `%d`：月份中的天数，数字（00 ~ 31）
> - `%e`：月份中的天数，数字（0 ~ 31）
> - `%m`：月，数字（01 ~ 12）
> - `%c`：月，数字（1 ~ 12）
> - `%b`：缩写的月份名字（Jan ~ Dec）
> - `%j`：一年中的天数（001 ~ 366）
> - `%H`：小时（00 ~ 23）
> - `%k`：小时（0 ~ 23）
> - `%h`：小时（01 ~ 12）
> - `%I`：小时（01 ~ 12）
> - `%l`：小时（1 ~ 12）
> - `%i`：分钟，数字（00 ~ 59）
> - `%r`：时间,12 小时（hh:mm:ss [AP]M）
> - `%T`：时间,24 小时（hh:mm:ss）
> - `%S`：秒（00 ~ 59）
> - `%s`：秒（00 ~ 59）
> - `%p`：AM 或 PM
> - `%w`：一个星期中的天数（0=Sunday ~ 6=Saturday
> - `%U`：星期（0 ~ 52），这里星期天是星期的第一天
> - `%u`：星期（0 ~ 52），这里星期一是星期的第一天
> - `%%`：一个文字“%”。
>
> 如：
>
> ```sql
> select DATE_FORMAT('1997-10-04 22:23:00', '%W %M %Y');
> # 'Saturday October 1997'
> select DATE_FORMAT('1997-10-04 22:23:00', '%H:%i:%s');
> # '22:23:00'
> select DATE_FORMAT('1997-10-04 22:23:00',
> '%D %y %a %d %m %b %j');
> # '4th 97 Sat 04 10 Oct 277'
> select DATE_FORMAT('1997-10-04 22:23:00',
> '%H %k %I %r %T %S %w');
> # '22 22 10 10:23:00 PM 22:23:00 00 6'
> ```
>
> 注：MySQL 3.23 中，在格式修饰符字符前需要%。在 MySQL 更早的版本中，%是可选的。
>
> ### `to_days()` 和 `from_days()`
>
> `TO_DAYS(date)` 给出一个日期 date，返回一个天数(从 0 年开始的天数)。
>
> 如：
>
> ```sql
> SELECT TO_DAYS(950501);
> # 728779
> SELECT TO_DAYS('1997-10-07');
> # 729669
> ```
>
> `FROM_DAYS(N)` 给出一个天数 N，返回一个 DATE 值。
>
> 如：
>
> ```sql
> SELECT FROM_DAYS(729669);
> # '1997-10-07'
> ```
>
> 结合：
>
> ```sql
> -- 选择某列中 date_col 的值是在最后30天以内：
> SELECT something FROM table
> WHERE TO_DAYS(NOW()) - TO_DAYS(date_col) <= 30;
> ```

如：

```sql
-- 获取当前系统时间：
SELECT EXTRACT(YEAR_MONTH FROM CURRENT_DATE);
SELECT EXTRACT(DAY_SECOND FROM CURRENT_DATE);
SELECT EXTRACT(HOUR_MINUTE FROM CURRENT_DATE);

-- 返回两个日期值之间的差值(月数)：
SELECT PERIOD_DIFF(200302,199802);
```

### 5. 加密函数

以下是文段的 markdown 格式：

- `AES_ENCRYPT(str,key)`：返回用密钥 key 对字符串 str 利用高级加密标准算法加密后的结果，调用 AES_ENCRYPT 的结果是一个二进制字符串，以 BLOB 类型存储
- `AES_DECRYPT(str,key)`：返回用密钥 key 对字符串 str 利用高级加密标准算法解密后的结果
- `DECODE(str,key)`：使用 key 作为密钥解密加密字符串 str
- `ENCRYPT(str,salt)`：使用`UNIXcrypt()`函数，用关键词 salt(一个可以惟一确定口令的字符串，就像钥匙一样)加密字符串 str
- `ENCODE(str,key)`：使用 key 作为密钥加密字符串 str，调用 ENCODE()的结果是一个二进制字符串，它以 BLOB 类型存储
- `MD5()`：计算字符串 str 的 MD5 校验和
- `PASSWORD(str)`：返回字符串 str 的加密版本，这个加密过程是不可逆转的，和 UNIX 密码加密过程使用不同的算法。从原文密码 str 计算并返回密码字符串，当参数为 NULL 时返回 NULL。这个函数用于用户授权表的 Password 列中的加密 MySQL 密码存储
- `SHA()`：计算字符串 str 的安全散列算法(SHA)校验和

如：

```sql
SELECT ENCRYPT('root','salt');
SELECT ENCODE('xufeng','key');
SELECT DECODE(ENCODE('xufeng','key'),'key'); # 加解密放在一起
SELECT AES_ENCRYPT('root','key');
SELECT AES_DECRYPT(AES_ENCRYPT('root','key'),'key');
SELECT MD5('123456');
SELECT SHA('123456');
```

### 8. 类型转化函数

为了进行数据类型转化，MySQL 提供了 `CAST()` 函数，它可以把一个值转化为指定的数据类型。

类型包括：BINARY,CHAR,DATE,TIME,DATETIME,SIGNED,UNSIGNED
如：

```sql
SELECT CAST(NOW() AS SIGNED INTEGER), CURDATE() + 0;
# 20230426074051 20230426
SELECT 'f' = BINARY 'F','f' = CAST('F' AS BINARY);
# 0 0
```

或者也可以直接使用转化函数：

```sql
select ASCII('2');
# 50
select ASCII(2);
# 50
select ASCII('dx');
# 100
select CHAR(77,121,83,81,'76');
# 'MySQL'
# select CHAR(77,77.3,'77.3');
'MMM‘
```

### 9. 系统信息函数

- `DATABASE()`：返回当前数据库名。
- `BENCHMARK(count,expr)`：将表达式`expr`重复运行`count`次。这个函数通常用于测试查询或计算的性能。
- `CONNECTION_ID()`：返回当前客户端的连接 ID。
- `FOUND_ROWS()`：返回最近一个`SELECT`查询检索的总行数，用于在使用`LIMIT`语句时确定实际返回的行数。
- `USER()` 或 `SYSTEM_USER()`：返回当前登录用户的用户名。
- `VERSION()`：返回 MySQL 服务器的版本。

如：

```sql
-- 返回当前数据库名、MySQL服务器版本和当前登录用户名
SELECT DATABASE(), VERSION(), USER();
-- 运行一个表达式9999999次，并显示所需的时间。
SELECT BENCHMARK( 9999999, LOG(RAND() * PI()) );
```

## Index 索引

详见：[Chapter3@创建与使用索引](../03-data-def-lang#创建与使用索引)

1. 直接添加索引：

   ```sql
   CREATE INDEX indexName ON mytable(username(length));
   ```

   如果是 CHAR，VARCHAR 类型，length 可以小于字段实际长度；如果是 BLOB 和 TEXT 类型，必须指定 length。

2. 通过修改表结构添加索引：

   ```sql
   ALTER table tableName ADD INDEX indexName(columnName)
   ```

3. 创建表的时候直接指定：

   ```sql
   CREATE TABLE mytable(
       ID INT NOT NULL,
       username VARCHAR(16) NOT NULL,
       INDEX [indexName] (username(length))
   );
   ```
