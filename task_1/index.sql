SELECT DISTINCT userBase.ID, userBase.UserName, userJoin.UserName as ParentUserName
FROM USER userBase
LEFT JOIN USER userJoin ON userBase.Parent = userJoin.ID;