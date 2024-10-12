SELECT FI.ID, NL.FISH_NAME, NL.LENGTH
FROM FISH_INFO FI JOIN (
  SELECT N.FISH_TYPE, N.FISH_NAME, L.LENGTH
    FROM FISH_NAME_INFO N JOIN (
        SELECT FISH_TYPE, MAX(LENGTH) AS LENGTH
        FROM FISH_INFO
        GROUP BY FISH_TYPE
    ) L ON N.FISH_TYPE = L.FISH_TYPE
) NL ON FI.FISH_TYPE = NL.FISH_TYPE AND FI.LENGTH = NL.LENGTH
ORDER BY FI.ID