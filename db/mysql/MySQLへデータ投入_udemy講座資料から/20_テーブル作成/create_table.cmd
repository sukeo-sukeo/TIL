@echo off
cd /d "%~dp0"
chcp 65001

mysql --defaults-extra-file=../dbaccess.cnf < ./ddl.sql
