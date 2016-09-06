<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AbilityScoresTest.aspx.cs" Inherits="DungeonsAndDragonsProject.AbilityScoresTest" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="styles/testStylesheet.css" rel="stylesheet" type="text/css" />
    <script src="scripts/JQuery/jquery-3.1.0.js"></script>
    <script src="scripts/random-js/lib/random.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <asp:Table ID="tblCharData" runat="server">
            <asp:TableRow>
                <asp:TableCell>
                    <asp:Label ID="lblCharName" runat="server" Text="Character Name:"></asp:Label>
                </asp:TableCell>
                <asp:TableCell>
                    <asp:Label ID="lblPlayerName" runat="server" Text="Player Name:"></asp:Label>
                </asp:TableCell>
            </asp:TableRow>
            <asp:TableRow>
                <asp:TableCell>
                    <asp:TextBox ID="txtCharName" runat="server"></asp:TextBox>
                </asp:TableCell>
                <asp:TableCell>
                    <asp:TextBox ID="txtPlayerName" runat="server"></asp:TextBox>
                </asp:TableCell>
            </asp:TableRow>
            <asp:TableRow>
                <asp:TableCell>
                    <asp:Label ID="lblClass" runat="server" Text="Class:"></asp:Label>
                </asp:TableCell>
                <asp:TableCell>
                    <asp:Label ID="lblLevel" runat="server" Text="Level:"></asp:Label>
                </asp:TableCell>
                <asp:TableCell>
                    <asp:Label ID="lblECL" runat="server" Text="ECL"></asp:Label>
                </asp:TableCell>
                <asp:TableCell>
                    <asp:Label ID="lblRace" runat="server" Text="Race:"></asp:Label>
                </asp:TableCell>
            </asp:TableRow>
            <asp:TableRow>
                <asp:TableCell>
                    <asp:SqlDataSource ID="sqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:testDB %>" SelectCommand="SELECT [Entry], [Description] FROM [dbo].[ValidationSetEntry] WHERE [SetID] = 1"></asp:SqlDataSource>
                    <asp:SqlDataSource ID="sqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:testDB %>" SelectCommand="SELECT [Entry], [Description] FROM [dbo].[ValidationSetEntry] WHERE [SetID] = 2"></asp:SqlDataSource>
                    <asp:DropDownList ID="ddlClass" runat="server" DataSourceID="sqlDataSource1" DataValueField="Entry" DataTextField="Description" AppendDataBoundItems="true">
                        <asp:ListItem Selected="True" Text="--Select Class--" Value="-1"></asp:ListItem>
                    </asp:DropDownList>
                </asp:TableCell>
                <asp:TableCell>
                    <asp:TextBox ID="txtLevel" runat="server" CssClass="txtbx"></asp:TextBox>
                </asp:TableCell>
                <asp:TableCell>
                    <asp:TextBox ID="txtECL" runat="server" CssClass="txtbx"></asp:TextBox>
                </asp:TableCell>
                <asp:TableCell>
                    <asp:DropDownList ID="ddlRace" runat="server" DataSourceID="sqlDataSource2" DataValueField="Entry" DataTextField="Description" AppendDataBoundItems="true">
                        <asp:ListItem Text="--Select Race--" Selected="True" Value="-1"></asp:ListItem>
                    </asp:DropDownList>
                </asp:TableCell>
            </asp:TableRow>
        </asp:Table>
        <br />
        <br />

        <asp:Table ID="tblAbilities" runat="server">
            <asp:TableRow>
                <asp:TableCell>
                    <asp:Button ID="btnRollScores" runat="server" Text="Roll For Scores" />
                </asp:TableCell>
                <asp:TableCell>
                    <asp:Button ID="btnManualInput" runat="server" Text="Manually Enter Scores" />
                </asp:TableCell>
            </asp:TableRow>
            <asp:TableRow CssClass="row">
                <asp:TableCell><asp:Label ID="lblStr" runat="server" Text="Strength:" CssClass="label"></asp:Label></asp:TableCell>
                <asp:TableCell><asp:TextBox ID="txtStr" runat="server" CssClass="txtbx"></asp:TextBox></asp:TableCell>
                <asp:TableCell ID="cellStrBtn" runat="server"><asp:Button ID="btnStr" runat="server" CssClass="btn" Font-Bold="true" ForeColor="White" Text="ROLL" OnClientClick="rollForAbility('str'); return false;"/></asp:TableCell>
                <asp:TableCell ID="cellStrPM" runat="server">
                    <asp:Button ID="btnStrM" runat="server" Text="-" CssClass="btnPM"/>
                    <asp:Button ID="btnStrP" runat="server" Text="+" CssClass="btnPM"/>
                </asp:TableCell>
                <asp:TableCell ID="cellStr" runat="server"></asp:TableCell>
            </asp:TableRow>
            <asp:TableRow CssClass="row">
                <asp:TableCell><asp:Label ID="lblDex" runat="server" Text="Dexterity:" CssClass="label"></asp:Label></asp:TableCell>
                <asp:TableCell><asp:TextBox ID="txtDex" runat="server" CssClass="txtbx"></asp:TextBox></asp:TableCell>
                <asp:TableCell ID="cellDexBtn" runat="server"><asp:Button ID="btnDex" runat="server" CssClass="btn" Text="ROLL" Font-Bold="true" ForeColor="White"  OnClientClick="rollForAbility('dex'); return false;"/></asp:TableCell>
                <asp:TableCell ID="cellDexPM" runat="server">
                    <asp:Button ID="btnDexM" runat="server" Text="-" CssClass="btnPM"/>
                    <asp:Button ID="btnDexP" runat="server" Text="+" CssClass="btnPM"/>
                </asp:TableCell>
                <asp:TableCell ID="cellDex" runat="server"></asp:TableCell>
            </asp:TableRow>
            <asp:TableRow CssClass="row">
                <asp:TableCell><asp:Label ID="lblCon" runat="server" Text="Constitution:" CssClass="label"></asp:Label></asp:TableCell>
                <asp:TableCell><asp:TextBox ID="txtCon" runat="server" CssClass="txtbx"></asp:TextBox></asp:TableCell>
                <asp:TableCell ID="cellConBtn" runat="server"><asp:Button ID="btnCon" runat="server" CssClass="btn" Text="ROLL" Font-Bold="true" ForeColor="White" OnClientClick="rollForAbility('con'); return false;"/></asp:TableCell>
                <asp:TableCell ID="cellConPM" runat="server">
                    <asp:Button ID="btnConM" runat="server" Text="-" CssClass="btnPM"/>
                    <asp:Button ID="btnConP" runat="server" Text="+" CssClass="btnPM"/>
                </asp:TableCell>
                <asp:TableCell ID="cellCon" runat="server"></asp:TableCell>
            </asp:TableRow>
            <asp:TableRow CssClass="row">
                <asp:TableCell><asp:Label ID="lblInt" runat="server" Text="Intelligence:" CssClass="label"></asp:Label></asp:TableCell>
                <asp:TableCell><asp:TextBox ID="txtInt" runat="server" CssClass="txtbx"></asp:TextBox></asp:TableCell>
                <asp:TableCell ID="cellIntBtn" runat="server"><asp:Button ID="btnInt" runat="server" CssClass="btn" Text="ROLL" Font-Bold="true" ForeColor="White" OnClientClick="rollForAbility('int'); return false;"/></asp:TableCell>
                <asp:TableCell ID="cellIntPM" runat="server">
                    <asp:Button ID="btnIntM" runat="server" Text="-" CssClass="btnPM"/>
                    <asp:Button ID="btnIntP" runat="server" Text="+" CssClass="btnPM"/>
                </asp:TableCell>
                <asp:TableCell ID="cellInt" runat="server"></asp:TableCell>
            </asp:TableRow>
            <asp:TableRow CssClass="row">
                <asp:TableCell><asp:Label ID="lblWis" runat="server" Text="Wisdom:" CssClass="label"></asp:Label></asp:TableCell>
                <asp:TableCell><asp:TextBox ID="txtWis" runat="server" CssClass="txtbx"></asp:TextBox></asp:TableCell>
                <asp:TableCell ID="cellWisBtn" runat="server"><asp:Button ID="btnWis" runat="server" CssClass="btn" Text="ROLL" Font-Bold="true" ForeColor="White" OnClientClick="rollForAbility('wis'); return false;"/></asp:TableCell>
                <asp:TableCell ID="cellWisPM" runat="server">
                    <asp:Button ID="btnWisM" runat="server" Text="-" CssClass="btnPM"/>
                    <asp:Button ID="btnWisP" runat="server" Text="+" CssClass="btnPM"/>
                </asp:TableCell>
                <asp:TableCell ID="cellWis" runat="server"></asp:TableCell>
            </asp:TableRow>
            <asp:TableRow CssClass="row">
                <asp:TableCell><asp:Label ID="lblCha" runat="server" Text="Charisma:" CssClass="label"></asp:Label></asp:TableCell>
                <asp:TableCell><asp:TextBox ID="txtCha" runat="server" CssClass="txtbx"></asp:TextBox></asp:TableCell>
                <asp:TableCell ID="cellChaBtn" runat="server"><asp:Button ID="btnCha" runat="server" CssClass="btn" Text="ROLL" Font-Bold="true" ForeColor="White" OnClientClick="rollForAbility('cha'); return false;"/></asp:TableCell>
                <asp:TableCell ID="cellChaPM" runat="server">
                    <asp:Button ID="btnChaM" runat="server" Text="-" CssClass="btnPM"/>
                    <asp:Button ID="btnChaP" runat="server" Text="+" CssClass="btnPM"/>
                </asp:TableCell>
                <asp:TableCell ID="cellCha" runat="server"></asp:TableCell>
            </asp:TableRow>
        </asp:Table>
    </form>
    <script src="scripts/abilityScripts.js"></script>
</body>
</html>
