-- =============================================
-- Author:  Arpad Sabo	
-- Create date:	2024-09-03
-- Description:	Same logic as hex.js to get hexcode but on T-SQL 
-- Tags: 
-- =============================================
/**********************************************************************
** Change History
**************************
**	PR	Date		Author      Description 
**	--  --------	-------     ------------------------------------

*********************************************************************/
CREATE PROCEDURE dbo.getRandomHexCode
AS
BEGIN
	SET NOCOUNT ON;

	DECLARE @hex NVARCHAR(200)

	SET @hex = ('1,2,3,4,5,6,7,8,9,A,B,C,D');

	DROP TABLE

	IF EXISTS #hexTable
		SELECT ROW_NUMBER() OVER (
				ORDER BY value
				) AS Rn
			,value
		INTO #hexTable
		FROM string_split(@hex, ',')

	DECLARE @hexLen INT

	SET @hexLen = (
			SELECT COUNT(*)
			FROM string_split(@hex, ',')
			)

	DECLARE @hexColor NVARCHAR(7) = '#'

	BEGIN
		DECLARE @i SMALLINT;

		SET @i = 0;

		WHILE @i < 6
		BEGIN
			SET @hexColor = CONCAT (
					@hexColor
					,(
						SELECT TOP 1 value
						FROM #hexTable
						WHERE Rn = (
								SELECT FLOOR(RAND() * @hexLen + 1)
								)
						)
					)
			SET @i = @i + 1
		END
	END

	SELECT @hexColor AS RandomHexCode
END;
