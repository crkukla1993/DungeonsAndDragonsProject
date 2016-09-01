<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AbilityScoresTest.aspx.cs" Inherits="DungeonsAndDragonsProject.AbilityScoresTest" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="styles/testStylesheet.css" rel="stylesheet" type="text/css" />
    <script src="scripts/JQuery/jquery-3.1.0.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <asp:Table ID="tblAbilities" runat="server">
            <asp:TableRow CssClass="row">
                <asp:TableCell><asp:Label ID="lblStr" runat="server" Text="Strength:" CssClass="label"></asp:Label></asp:TableCell>
                <asp:TableCell><asp:TextBox ID="txtStr" runat="server" CssClass="txtbx"></asp:TextBox></asp:TableCell>
                <asp:TableCell><asp:Button ID="btnStr" runat="server" Text="Roll" CssClass="btn" OnClientClick="rollForAbility('str'); return false;"/></asp:TableCell>
                <asp:TableCell ID="cellStr" runat="server"></asp:TableCell>
            </asp:TableRow>
            <asp:TableRow CssClass="row">
                <asp:TableCell><asp:Label ID="lblDex" runat="server" Text="Dexterity:" CssClass="label"></asp:Label></asp:TableCell>
                <asp:TableCell><asp:TextBox ID="txtDex" runat="server" CssClass="txtbx"></asp:TextBox></asp:TableCell>
                <asp:TableCell><asp:Button ID="btnDex" runat="server" Text="Roll" CssClass="btn" OnClientClick="rollForAbility('dex'); return false;"/></asp:TableCell>
                <asp:TableCell ID="cellDex" runat="server"></asp:TableCell>
            </asp:TableRow>
            <asp:TableRow CssClass="row">
                <asp:TableCell><asp:Label ID="lblCon" runat="server" Text="Constitution:" CssClass="label"></asp:Label></asp:TableCell>
                <asp:TableCell><asp:TextBox ID="txtCon" runat="server" CssClass="txtbx"></asp:TextBox></asp:TableCell>
                <asp:TableCell><asp:Button ID="btnCon" runat="server" Text="Roll" CssClass="btn" OnClientClick="rollForAbility('con'); return false;"/></asp:TableCell>
                <asp:TableCell ID="cellCon" runat="server"></asp:TableCell>
            </asp:TableRow>
            <asp:TableRow CssClass="row">
                <asp:TableCell><asp:Label ID="lblInt" runat="server" Text="Intelligence:" CssClass="label"></asp:Label></asp:TableCell>
                <asp:TableCell><asp:TextBox ID="txtInt" runat="server" CssClass="txtbx"></asp:TextBox></asp:TableCell>
                <asp:TableCell><asp:Button ID="btnInt" runat="server" Text="Roll" CssClass="btn" OnClientClick="rollForAbility('int'); return false;"/></asp:TableCell>
                <asp:TableCell ID="cellInt" runat="server"></asp:TableCell>
            </asp:TableRow>
            <asp:TableRow CssClass="row">
                <asp:TableCell><asp:Label ID="lblWis" runat="server" Text="Wisdom:" CssClass="label"></asp:Label></asp:TableCell>
                <asp:TableCell><asp:TextBox ID="txtWis" runat="server" CssClass="txtbx"></asp:TextBox></asp:TableCell>
                <asp:TableCell><asp:Button ID="btnWis" runat="server" Text="Roll" CssClass="btn" OnClientClick="rollForAbility('wis'); return false;"/></asp:TableCell>
                <asp:TableCell ID="cellWis" runat="server"></asp:TableCell>
            </asp:TableRow>
            <asp:TableRow CssClass="row">
                <asp:TableCell><asp:Label ID="lblCha" runat="server" Text="Charisma:" CssClass="label"></asp:Label></asp:TableCell>
                <asp:TableCell><asp:TextBox ID="txtCha" runat="server" CssClass="txtbx"></asp:TextBox></asp:TableCell>
                <asp:TableCell><asp:Button ID="btnCha" runat="server" Text="Roll" CssClass="btn" OnClientClick="rollForAbility('cha'); return false;"/></asp:TableCell>
                <asp:TableCell ID="cellCha" runat="server"></asp:TableCell>
            </asp:TableRow>
        </asp:Table>
    </form>
    <script src="scripts/abilityScripts.js"></script>
</body>
</html>
